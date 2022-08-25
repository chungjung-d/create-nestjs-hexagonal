import { Module } from '@nestjs/common';
import { UserFactory } from '../../application/factory/user.factory';
import { UserMapper } from '../../application/mapper/user.mapper';

export const USER_MAPPER = 'USER_MAPPER';

const mapperProvider = [{ provide: USER_MAPPER, useClass: UserMapper }];

@Module({
  providers: [...mapperProvider],
})
export class MapperInjectModule {}
