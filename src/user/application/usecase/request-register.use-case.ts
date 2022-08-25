import { Injectable } from '@nestjs/common';
import { IUseCase } from '../../../abstract/use-case';
import { RequestRegisterDTO } from '../../domain/port/controller/dto/auth.dto';

@Injectable()
export class RequestRegisterUseCase
  implements IUseCase<RequestRegisterDTO, void>
{
  async execute(request: RequestRegisterDTO): Promise<void> {
    return Promise.resolve(undefined);
  }
}
