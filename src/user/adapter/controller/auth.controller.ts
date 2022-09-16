import { Body, Controller, Post } from '@nestjs/common';
import { AuthControllerPort } from '../../port/controller/auth.controller.port';
import { MessageResDTO } from '../../port/controller/dto/common.dto';
import {
  RegisterDTO,
  SendCertificationCodeDTO,
  ValidateCertificationCodeDTO,
  ValidateCertificationCodeResDTO,
} from '../../port/controller/dto/auth.dto';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import {
  SendCertificationCodeCommand,
  SendCertificationCodeCommandDataType,
} from '../../core/application/usecase/command/send-certification-code.command';
import {
  ValidateCertificationCodeQuery,
  ValidateCertificationCodeQueryDataType,
} from '../../core/application/usecase/query/validate-certification-code.query';
import {
  RegisterCommand,
  RegisterCommandDataType,
} from '../../core/application/usecase/command/register.command';

@Controller('v1/user')
export class AuthController implements AuthControllerPort {
  constructor(
    private eventBus: EventBus,
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post('/register/code')
  async sendCertificationCode(
    @Body() sendCertificationCodeDTO: SendCertificationCodeDTO,
  ): Promise<MessageResDTO> {
    const sendCertificationCodeCommandDTO: SendCertificationCodeCommandDataType =
      {
        ...sendCertificationCodeDTO,
      };

    const sendCertificationCodeCommand: SendCertificationCodeCommand =
      new SendCertificationCodeCommand(sendCertificationCodeCommandDTO);

    await this.commandBus.execute(sendCertificationCodeCommand);

    return { message: 'success' };
  }

  @Post('/register/validate')
  async validateCertificationCode(
    @Body() validateCertificationCodeDTO: ValidateCertificationCodeDTO,
  ): Promise<ValidateCertificationCodeResDTO> {
    const validateCertificationCodeQueryDTO: ValidateCertificationCodeQueryDataType =
      { ...validateCertificationCodeDTO };

    const validateCertificationCodeQuery: ValidateCertificationCodeQuery =
      new ValidateCertificationCodeQuery(validateCertificationCodeQueryDTO);

    return await this.queryBus.execute(validateCertificationCodeQuery);
  }

  @Post('/register')
  async register(@Body() registerDTO: RegisterDTO): Promise<MessageResDTO> {
    const registerCommandDto: RegisterCommandDataType = { ...registerDTO };
    const registerCommand: RegisterCommand = new RegisterCommand(
      registerCommandDto,
    );

    await this.commandBus.execute(registerCommand);

    return { message: 'success' };
  }
}
