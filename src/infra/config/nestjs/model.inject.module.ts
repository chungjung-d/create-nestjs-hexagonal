import { Module } from '@nestjs/common';
import { UserModel } from '../../../domain/core/model/user.model';

export const USER_MODEL = 'USER_MODEL';

const modelProvider = [{ provide: USER_MODEL, useClass: UserModel }];

@Module({
  providers: [...modelProvider],
})
export class ModelInjectModule {}
