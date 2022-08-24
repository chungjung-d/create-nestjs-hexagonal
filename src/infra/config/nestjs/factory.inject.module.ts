import { Module } from '@nestjs/common';
import { UserFactory } from '../../../application/factory/user.factory';

export const USER_FACTORY = 'USER_FACTORY';

const factoryProvider = [{ provide: USER_FACTORY, useClass: UserFactory }];

@Module({
  providers: [...factoryProvider],
})
export class FactoryInjectModule {}
