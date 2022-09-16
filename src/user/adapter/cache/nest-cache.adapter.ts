import { Injectable } from '@nestjs/common';
import {
  CertificationCachePort,
  SetCertificationCodeDataType,
} from '../../port/cache/certification.cache.port';
import { NestCacheLib } from '@global/lib/nest-cache.lib';

@Injectable()
export class NestCacheAdapter implements CertificationCachePort {
  constructor(private nestCacheLib: NestCacheLib) {}

  async setCertificationCode(
    setCertificationCodeDTO: SetCertificationCodeDataType,
  ): Promise<void> {
    const { emailCertificationCode, userEmailId } = setCertificationCodeDTO;

    await this.nestCacheLib.set<string>(userEmailId, emailCertificationCode, {
      ttl: 180000,
    });
  }

  async getCertificationCode(userEmailId: string): Promise<string> {
    return await this.nestCacheLib.get<string>(userEmailId);
  }
}
