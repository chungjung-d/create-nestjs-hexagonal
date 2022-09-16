import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { NodeMailerAdapter } from '../../../../adapter/mailer/node-mailer.adapter';
import { SendCertificationEmailType } from '../../../../port/mailer/mailer.port';
import { SendCertificationEmailEvent } from '../event/send-certification-email.event';

@Injectable()
@EventsHandler(SendCertificationEmailEvent)
export class SendCertificationEmailHandler
  implements IEventHandler<SendCertificationEmailEvent>
{
  constructor(private nodeMailerAdapter: NodeMailerAdapter) {}

  async handle(event: SendCertificationEmailEvent) {
    const { userEmailId, emailCertificationCode } =
      event.sendCertificationEmailEventDTO;

    const sendCertificationEmailDTO: SendCertificationEmailType = {
      userEmailId: userEmailId,
      emailCertificationCode: emailCertificationCode,
    };

    await this.nodeMailerAdapter.sendCertificationEmail(
      sendCertificationEmailDTO,
    );
  }
}
