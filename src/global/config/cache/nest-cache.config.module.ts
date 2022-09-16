import { CacheModule, Module } from '@nestjs/common';
import { NestCacheLib } from '@global/lib/nest-cache.lib';

@Module({
  imports: [CacheModule.register()],
  providers: [NestCacheLib],
  exports: [NestCacheLib],
})
export class NestCacheConfigModule {}
