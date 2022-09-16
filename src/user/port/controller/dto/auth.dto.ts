import { UserType } from '../../../core/type/entity-type/user.type';
import { RegisterCertificationType } from '../../../core/type/base-message-type/auth-message.type';
import { IsEmail, IsJWT, IsString } from 'class-validator';

export class SendCertificationCodeDTO implements Pick<UserType, 'userEmailId'> {
  @IsEmail()
  userEmailId: string;
}

export class ValidateCertificationCodeDTO
  implements
    Pick<UserType, 'userEmailId'>,
    Pick<RegisterCertificationType, 'emailCertificationCode'>
{
  @IsEmail()
  userEmailId: string;

  @IsString()
  emailCertificationCode: string;
}

export class ValidateCertificationCodeResDTO
  implements Pick<RegisterCertificationType, 'registerCertificationJWTToken'>
{
  @IsJWT()
  registerCertificationJWTToken: string;
}

export class RegisterDTO
  implements
    Pick<UserType, 'userEmailId' | 'userPassword'>,
    Pick<RegisterCertificationType, 'registerCertificationJWTToken'>
{
  @IsEmail()
  userEmailId: string;

  @IsString()
  userPassword: string;

  @IsJWT()
  registerCertificationJWTToken: string;
}
