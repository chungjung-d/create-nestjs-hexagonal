import { IModel } from '../../../../abstract/model';
import { accessLevelType, UserType } from '../type/entity-type/user.type';
import { AggregateRoot } from '@nestjs/cqrs';

export type UserModelRequireType = Pick<
  UserType,
  'userEmailId' | 'userPassword'
>;

export type UserModelOptionalType = Partial<
  Omit<UserType, 'userEmailId' | 'userPassword'>
>;

export type UserModelPropertyType = Required<UserType>;

export interface UserModelInterface
  extends IModel<UserModelPropertyType>,
    UserType {
  comparePassword(password: string): boolean;
}

export class UserModel extends AggregateRoot implements UserModelInterface {
  userEmailId: string;
  userPassword: string;
  userUUID: string;
  userName: string;
  accessLevel: accessLevelType;

  constructor(
    properties: Required<UserModelRequireType> & UserModelOptionalType,
  ) {
    super();
    Object.assign(this, properties);
  }

  properties(): UserModelPropertyType {
    return {
      userName: this.userName,
      accessLevel: this.accessLevel,
      userEmailId: this.userEmailId,
      userPassword: this.userPassword,
      userUUID: this.userUUID,
    };
  }

  comparePassword(password: string): boolean {
    return false;
  }
}
