import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { User } from '../../../user/adapter/database/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_DATABASE_HOST'),
        port: configService.get<number>('POSTGRES_DATABASE_PORT'),
        username: configService.get<string>('POSTGRES_DATABASE_USERNAME'),
        password: configService.get<string>('POSTGRES_DATABASE_PASSWORD'),
        database: configService.get<string>('POSTGRES_DATABASE_NAME'),
        // entities: [join(__dirname, '..', '..', '**/*.entity.{js,ts}')],
        entities: [User],
        synchronize: configService.get<boolean>('POSTGRES_SYNC_OPTION'),
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseConfigModule {}
