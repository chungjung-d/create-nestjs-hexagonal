import {
  RequestRegisterDTO,
  RequestVerifyEmailDTO,
  VerifyEmailDTO,
  VerifyEmailResDTO,
} from './dto/auth.dto';
import { MessageResDTO } from './dto/common.dto';

export interface AuthControllerPort {
  // Register Logic
  requestVerifyEmail(
    requestVerifyEmailDTO: RequestVerifyEmailDTO,
  ): Promise<MessageResDTO>;

  verifyEmail(verifyEmailDTO: VerifyEmailDTO): Promise<VerifyEmailResDTO>;

  requestRegister(
    requestRegisterDTO: RequestRegisterDTO,
  ): Promise<MessageResDTO>;
}
