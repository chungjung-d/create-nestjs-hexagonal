import {
  RegisterDTO,
  SendCertificationCodeDTO,
  ValidateCertificationCodeDTO,
  ValidateCertificationCodeResDTO,
} from './dto/auth.dto';
import { MessageResDTO } from './dto/common.dto';

export interface AuthControllerPort {
  // Register Logic
  sendCertificationCode(
    sendCertificationCodeDTO: SendCertificationCodeDTO,
  ): Promise<MessageResDTO>;

  validateCertificationCode(
    validateCertificationCodeDTO: ValidateCertificationCodeDTO,
  ): Promise<ValidateCertificationCodeResDTO>;

  register(requestDTO: RegisterDTO): Promise<MessageResDTO>;
}
