import { Module } from '@nestjs/common';
import { UserFactory } from '../../application/factory/user.factory';
import { CqrsModule } from '@nestjs/cqrs';

export const USER_FACTORY = 'USER_FACTORY';

const factoryProvider = [{ provide: USER_FACTORY, useClass: UserFactory }];

@Module({
  imports: [CqrsModule],
  providers: [...factoryProvider],
})
export class FactoryInjectModule {}
