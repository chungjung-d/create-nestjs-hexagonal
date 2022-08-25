import { useCase } from './infra/nestjs/usecase.inject';
import { ModelInjectModule } from './infra/nestjs/model.inject.module';
import { FactoryInjectModule } from './infra/nestjs/factory.inject.module';
import { Module } from '@nestjs/common';
import { AuthController } from './infra/adapter/controller/auth.controller';

@Module({
  imports: [FactoryInjectModule, ModelInjectModule],
  controllers: [AuthController],
  providers: [...useCase],
})
export class UserModule {}
