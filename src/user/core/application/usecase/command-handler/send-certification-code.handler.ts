import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';

import { SetCertificationCodeDataType } from '../../../../port/cache/certification.cache.port';
import { SendCertificationCodeCommand } from '../command/send-certification-code.command';
import {
  SendCertificationEmailEvent,
  SendCertificationEmailEventDataType,
} from '../event/send-certification-email.event';
import { NestCacheAdapter } from '../../../../adapter/cache/nest-cache.adapter';

@Injectable()
@CommandHandler(SendCertificationCodeCommand)
export class SendCertificationCodeHandler
  implements ICommandHandler<SendCertificationCodeCommand, void>
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly nestCacheAdapter: NestCacheAdapter,
  ) {}

  async execute(command: SendCertificationCodeCommand): Promise<void> {
    const { userEmailId } = command.sendCertificationCodeCommandDTO;
    const emailCertificationCode = Math.random().toString(36).substring(2, 12);

    const SendCertificationEmailEventDto: SendCertificationEmailEventDataType =
      {
        userEmailId: userEmailId,
        emailCertificationCode: emailCertificationCode,
      };

    const sendCertificationEmailEvent: SendCertificationEmailEvent =
      new SendCertificationEmailEvent(SendCertificationEmailEventDto);

    await this.eventBus.publish(sendCertificationEmailEvent);

    const setCertificationCodeDTO: SetCertificationCodeDataType = {
      userEmailId: userEmailId,
      emailCertificationCode: emailCertificationCode,
    };

    await this.nestCacheAdapter.setCertificationCode(setCertificationCodeDTO);
  }
}
