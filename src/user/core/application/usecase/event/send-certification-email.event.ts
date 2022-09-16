import { UserType } from '../../../type/entity-type/user.type';
import { EmailEvent } from '@global/abstract/event/email.event';
import { RegisterCertificationType } from '../../../type/base-message-type/auth-message.type';

export type SendCertificationEmailEventDataType = Pick<
  UserType,
  'userEmailId'
> &
  Pick<RegisterCertificationType, 'emailCertificationCode'>;

export class SendCertificationEmailEvent extends EmailEvent {
  constructor(
    readonly sendCertificationEmailEventDTO: SendCertificationEmailEventDataType,
  ) {
    super();
  }
}
