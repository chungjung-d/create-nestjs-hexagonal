import { UserType } from '../../../core/type/entity-type/user.type';
import { RegisterVerifyType } from '../../../core/type/base-message-type/auth-message.type';
import { IsEmail, IsJWT, IsString } from 'class-validator';
import { ResponseMessageType } from '../../../core/type/base-message-type/common-message.type';
import { UserModelRequireType } from '../../../core/model/user.model';

export class RequestVerifyEmailDTO implements Pick<UserType, 'userEmailId'> {
  @IsEmail()
  userEmailId: string;
}

export class VerifyEmailDTO
  implements
    Pick<UserType, 'userEmailId'>,
    Pick<RegisterVerifyType, 'emailVerifyCode'>
{
  @IsEmail()
  userEmailId: string;

  @IsString()
  emailVerifyCode: string;
}

export class VerifyEmailResDTO
  implements Pick<RegisterVerifyType, 'registerVerifyJWTToken'>
{
  @IsJWT()
  registerVerifyJWTToken: string;
}

export class RequestRegisterDTO
  implements
    Pick<UserType, 'userEmailId' | 'userPassword'>,
    Pick<RegisterVerifyType, 'registerVerifyJWTToken'>
{
  @IsEmail()
  userEmailId: string;

  @IsString()
  userPassword: string;

  @IsJWT()
  registerVerifyJWTToken: string;
}
