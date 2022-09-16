import { IFactory } from '@global/abstract/factory';
import {
  UserModel,
  UserModelPropertyType,
  UserModelRequireType,
} from '../../domain/model/user.model';
import { Inject, Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
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
