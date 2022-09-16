import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { NodeMailerLib } from '@global/lib/node-mailer.lib';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          service: configService.get<string>('EMAIL_SERVICE'),
          host: configService.get<string>('EMAIL_HOST'),
          port: configService.get<number>('EMAIL_PORT'),
          auth: {
            user: configService.get<string>('EMAIL_USER'),
            pass: configService.get<string>('EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: '"no-reply" <email address>',
        },
        preview: true,
        template: {
          dir: __dirname,
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [NodeMailerLib],
  exports: [NodeMailerLib],
})
export class NodeMailerConfigModule {}
