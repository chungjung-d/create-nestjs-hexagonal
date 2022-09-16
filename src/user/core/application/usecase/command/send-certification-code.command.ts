import { UserType } from '../../../type/entity-type/user.type';
import { ICommand } from '@nestjs/cqrs';

export type SendCertificationCodeCommandDataType = Pick<
  UserType,
  'userEmailId'
>;

export class SendCertificationCodeCommand implements ICommand {
  constructor(
    readonly sendCertificationCodeCommandDTO: SendCertificationCodeCommandDataType,
  ) {}
}
