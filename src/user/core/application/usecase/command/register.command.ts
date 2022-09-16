import { UserType } from '../../../type/entity-type/user.type';
import { ICommand } from '@nestjs/cqrs';
import { RegisterCertificationType } from '../../../type/base-message-type/auth-message.type';

export type RegisterCommandDataType = Pick<
  UserType,
  'userEmailId' | 'userPassword'
> &
  Pick<RegisterCertificationType, 'registerCertificationJWTToken'>;

export class RegisterCommand implements ICommand {
  constructor(readonly registerCommandDto: RegisterCommandDataType) {}
}
