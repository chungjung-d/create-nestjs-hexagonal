import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/config/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FactoryInjectModule } from './infra/config/nestjs/factory.inject.module';
import { ModelInjectModule } from './infra/config/nestjs/model.inject.module';
import { useCase } from './infra/config/nestjs/usecase.inject';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : '.develop.env',
    }),
    DatabaseModule,
    FactoryInjectModule,
    ModelInjectModule,
    ...useCase,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
