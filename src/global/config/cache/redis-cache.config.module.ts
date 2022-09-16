import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisCacheLib } from '@global/lib/redis-cache.lib';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get<string>('REDIS_CACHE_HOST'),
        port: configService.get<number>('REDIS_CACHE_PORT'),
        ttl: 0,
      }),
    }),
  ],
  providers: [RedisCacheLib],
  exports: [RedisCacheLib],
})
export class RedisCacheConfigModule {}
