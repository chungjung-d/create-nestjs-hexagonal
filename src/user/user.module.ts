import { Module } from '@nestjs/common';
import { UserFactory } from './core/application/factory/user.factory';
import { UserMapper } from './core/application/mapper/user.mapper';
import { AuthController } from './adapter/controller/auth.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { NodeMailerAdapter } from './adapter/mailer/node-mailer.adapter';
import { NestCacheConfigModule } from '@global/config/cache/nest-cache.config.module';
import { UserMariadbAdapter } from './adapter/database/adapter/user.mariadb.adapter';
import { RedisCacheConfigModule } from '@global/config/cache/redis-cache.config.module';
import { NodeMailerConfigModule } from '@global/config/mailer/node-mailer.config.module';
import { SendCertificationEmailHandler } from './core/application/usecase/event-handler/send-certification-email.handler';
import { SendCertificationCodeHandler } from './core/application/usecase/command-handler/send-certification-code.handler';
import { NestCacheAdapter } from './adapter/cache/nest-cache.adapter';
import { ValidateCertificationCodeHandler } from './core/application/usecase/query-handler/validate-certification-code.handler';
import { ConfigModule } from '@nestjs/config';
import { RegisterHandler } from './core/application/usecase/command-handler/register.handler';

const commandHandler = [SendCertificationCodeHandler, RegisterHandler];
const eventHandler = [SendCertificationEmailHandler];
const queryHandler = [ValidateCertificationCodeHandler];

const handler = [...commandHandler, ...eventHandler, ...queryHandler];

const factory = [UserFactory];
const mapper = [UserMapper];
const adapter = [NodeMailerAdapter, UserMariadbAdapter, NestCacheAdapter];

@Module({
  imports: [
    CqrsModule,
    ConfigModule,
    NestCacheConfigModule,
    RedisCacheConfigModule,
    NodeMailerConfigModule,
  ],
  controllers: [AuthController],
  providers: [...factory, ...mapper, ...handler, ...adapter],
})
export class UserModule {}
