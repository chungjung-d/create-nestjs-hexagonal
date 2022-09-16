import { UserType } from '../../core/type/entity-type/user.type';
import { RegisterCertificationType } from '../../core/type/base-message-type/auth-message.type';

export type SendCertificationEmailType = Pick<UserType, 'userEmailId'> &
  Pick<RegisterCertificationType, 'emailCertificationCode'>;

export interface MailerPort {
  sendCertificationEmail(
    sendCertificationEmailDTO: SendCertificationEmailType,
  ): Promise<void>;
}
