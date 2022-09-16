import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { RegisterCommand } from '../command/register.command';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { httpError } from '@global/constant/error.constant';
import { HttpError } from '@global/Error/http-error';
import { UserFactory } from '../../factory/user.factory';
import { UserModel } from '../../../domain/model/user.model';
import { DataSource, EntityManager } from 'typeorm';
import { UserMariadbAdapter } from '../../../../adapter/database/adapter/user.mariadb.adapter';

@Injectable()
@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand, void> {
  constructor(
    private readonly eventBus: EventBus,
    private configService: ConfigService,
    private userFactory: UserFactory,
    private userMariadbAdapter: UserMariadbAdapter,
    private dataSource: DataSource,
  ) {}

  async execute(command: RegisterCommand): Promise<void> {
    const { userEmailId, userPassword, registerCertificationJWTToken } =
      command.registerCommandDto;

    const verify = await jwt.verify(
      registerCertificationJWTToken,
      this.configService.get('CERTIFICATION_JWT_SECRET'),
    );

    if (verify.sub !== userEmailId) {
      throw new HttpError(httpError.AUTH_VALIDATE_FAILED);
    }

    const userModel = this.userFactory.create({
      userEmailId: userEmailId,
      userPassword: userPassword,
    });

    userModel.hashPassword();

    await this.transaction(userModel);
  }

  async transaction(userModel: UserModel): Promise<void> {
    await this.dataSource.manager.transaction(
      async (transactionalEntityManager: EntityManager) => {
        await this.userMariadbAdapter.createUser(
          userModel,
          transactionalEntityManager,
        );
      },
    );
  }
}
