import { Injectable } from '@nestjs/common';
import {
  MailerPort,
  SendCertificationEmailType,
} from '../../port/mailer/mailer.port';
import { NodeMailerLib } from '@global/lib/node-mailer.lib';

@Injectable()
export class NodeMailerAdapter implements MailerPort {
  constructor(private nodeMailerLib: NodeMailerLib) {}

  async sendCertificationEmail(
    sendCertificationEmailDTO: SendCertificationEmailType,
  ): Promise<void> {
    const { emailCertificationCode, userEmailId } = sendCertificationEmailDTO;

    await this.nodeMailerLib.sendMail({
      to: userEmailId, // list of receivers
      from: 'chungjung.dev.email@gmail.com', // sender address
      subject: 'Gist Email Verification Code ✔', // Subject line
      text: 'welcome', // plaintext body
      html: `<b>${emailCertificationCode}</b>`, // HTML body content
    });
  }
}
