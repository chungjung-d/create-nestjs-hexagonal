import { Injectable } from '@nestjs/common';

import { MailerService } from '@nestjs-modules/mailer';
import { ISendMailOptions } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface';

@Injectable()
export class NodeMailerLib {
  constructor(private mailerService: MailerService) {}

  async sendMail(sendMailOptions: ISendMailOptions): Promise<void> {
    await this.mailerService.sendMail(sendMailOptions);
  }
}
