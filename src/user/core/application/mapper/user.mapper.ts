import { UserModel } from '../../domain/model/user.model';
import { User } from '../../../adapter/database/entity/user.entity';

import { UserFactory } from '../factory/user.factory';
import { Injectable } from '@nestjs/common';
import { IMapper } from '@global/abstract/mapper';

@Injectable()
export class UserMapper implements IMapper<UserModel, User> {
  constructor(private readonly userFactory: UserFactory) {}

  entityToModel(_entity: User): UserModel {
    return this.userFactory.reconstitute(_entity);
  }

  modelToEntity(_model: UserModel): User {
    return _model.properties();
  }
}
