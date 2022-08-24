import { IFactory } from '../../domain/abstract/factory';
import {
  UserModel,
  UserModelPropertyType,
  UserModelRequireType,
} from '../../domain/core/model/user.model';
import { Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

export class UserFactory
  implements
    IFactory<Required<UserModelRequireType>, UserModelPropertyType, UserModel>
{
  constructor(
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher,
  ) {}

  create(createDTO: Required<UserModelRequireType>): UserModel {
    return this.eventPublisher.mergeObjectContext(new UserModel(createDTO));
  }
  reconstitute(reconstituteDTO: UserModelPropertyType): UserModel {
    return this.eventPublisher.mergeObjectContext(
      new UserModel(reconstituteDTO),
    );
  }
}
