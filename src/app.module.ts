import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FactoryInjectModule } from './user/infra/nestjs/factory.inject.module';
import { ModelInjectModule } from './user/infra/nestjs/model.inject.module';
import { useCase } from './user/infra/nestjs/usecase.inject';
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : '.develop.env',
    }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
