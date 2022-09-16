import {
  EventBus,
  EventsHandler,
  IEventHandler,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { NestCacheAdapter } from '../../../../adapter/cache/nest-cache.adapter';
import { ValidateCertificationCodeQuery } from '../query/validate-certification-code.query';
import { httpError } from '@global/constant/error.constant';
import { HttpError } from '@global/Error/http-error';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { RegisterCertificationType } from '../../../type/base-message-type/auth-message.type';

type ValidateCertificationCodeHandlerResDataType = Pick<
  RegisterCertificationType,
  'registerCertificationJWTToken'
>;

@Injectable()
@QueryHandler(ValidateCertificationCodeQuery)
export class ValidateCertificationCodeHandler
  implements
    IQueryHandler<
      ValidateCertificationCodeQuery,
      ValidateCertificationCodeHandlerResDataType
    >
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly nestCacheAdapter: NestCacheAdapter,
    private readonly configService: ConfigService,
  ) {}

  async execute(
    query: ValidateCertificationCodeQuery,
  ): Promise<ValidateCertificationCodeHandlerResDataType> {
    const { userEmailId, emailCertificationCode } =
      query.validateCertificationCodeQueryDTO;

    const certficationCode: string =
      await this.nestCacheAdapter.getCertificationCode(userEmailId);

    if (certficationCode !== emailCertificationCode) {
      throw new HttpError(httpError.AUTH_VALIDATE_FAILED);
    }

    const jwtSecret = this.configService.get<string>(
      'CERTIFICATION_JWT_SECRET',
    );
    const jwtExpire = this.configService.get<string>(
      'CERTIFICATION_JWT_EXPIRE',
    );

    const registerCertificationJWTToken = jwt.sign(
      { sub: userEmailId },
      jwtSecret,
      {
        algorithm: 'HS256',
        expiresIn: jwtExpire,
      },
    );

    return { registerCertificationJWTToken: registerCertificationJWTToken };
  }
}
