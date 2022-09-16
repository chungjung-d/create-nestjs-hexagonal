import { UserType } from '../../../type/entity-type/user.type';
import { RegisterCertificationType } from '../../../type/base-message-type/auth-message.type';
import { IQuery } from '@nestjs/cqrs';

export type ValidateCertificationCodeQueryDataType = Pick<
  UserType,
  'userEmailId'
> &
  Pick<RegisterCertificationType, 'emailCertificationCode'>;

export class ValidateCertificationCodeQuery implements IQuery {
  constructor(
    readonly validateCertificationCodeQueryDTO: ValidateCertificationCodeQueryDataType,
  ) {}
}
