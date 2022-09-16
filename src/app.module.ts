import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DatabaseConfigModule } from './global/config/database/database.config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : '.develop.env',
    }),
    DatabaseConfigModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
