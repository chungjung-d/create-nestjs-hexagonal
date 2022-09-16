import { UserType } from '../../core/type/entity-type/user.type';
import { RegisterCertificationType } from '../../core/type/base-message-type/auth-message.type';

export type SetCertificationCodeDataType = Pick<UserType, 'userEmailId'> &
  Pick<RegisterCertificationType, 'emailCertificationCode'>;

export interface CertificationCachePort {
  setCertificationCode(
    setCertificationCodeDTO: SetCertificationCodeDataType,
  ): Promise<void>;

  getCertificationCode(userEmailId: string): Promise<string>;
}
