import { UserModel } from '../../domain/core/model/user.model';
import { User } from '../../infra/adapter/database/entity/user.entity';
import { IMapper } from '../../../abstract/mapper';
import { Inject } from '@nestjs/common';
import { UserFactory } from '../factory/user.factory';
import { USER_FACTORY } from '../../infra/nestjs/factory.inject.module';

export class UserMapper implements IMapper<UserModel, User> {
  constructor(
    @Inject(USER_FACTORY) private readonly userFactory: UserFactory,
  ) {}

  entityToModel(_entity: User): UserModel {
    return this.userFactory.reconstitute(_entity);
  }

  modelToEntity(_model: UserModel): User {
    return _model.properties();
  }
}
