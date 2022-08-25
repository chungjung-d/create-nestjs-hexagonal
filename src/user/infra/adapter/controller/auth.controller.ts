import { Controller } from '@nestjs/common';
import { AuthControllerPort } from '../../../domain/port/controller/auth.controller.port';
import { MessageResDTO } from '../../../domain/port/controller/dto/common.dto';
import {
  RequestRegisterDTO,
  RequestVerifyEmailDTO,
  VerifyEmailDTO,
  VerifyEmailResDTO,
} from '../../../domain/port/controller/dto/auth.dto';
import { RequestRegisterUseCase } from '../../../application/usecase/request-register.use-case';

@Controller()
export class AuthController implements AuthControllerPort {
  constructor(
    private readonly requestRegisterUseCase: RequestRegisterUseCase,
  ) {}

  async requestRegister(
    requestRegisterDTO: RequestRegisterDTO,
  ): Promise<MessageResDTO> {
    await this.requestRegisterUseCase.execute(requestRegisterDTO);
    return { message: 'Success' };
  }

  requestVerifyEmail(
    requestVerifyEmailDTO: RequestVerifyEmailDTO,
  ): Promise<MessageResDTO> {
    return Promise.resolve(undefined);
  }

  verifyEmail(verifyEmailDTO: VerifyEmailDTO): Promise<VerifyEmailResDTO> {
    return Promise.resolve(undefined);
  }
}
