import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheLib {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get<T>(key: string): Promise<T> {
    return await this.cache.get(key);
  }

  async set<T>(key: string, value: T, option?): Promise<void> {
    await this.cache.set(key, value, option);
  }

  async reset(): Promise<void> {
    await this.cache.reset();
  }

  async del(key: string): Promise<void> {
    await this.cache.del(key);
  }
}
