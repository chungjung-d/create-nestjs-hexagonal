import { IModel } from '@global/abstract/model';
import { AccessLevelType, UserType } from '../../type/entity-type/user.type';
import { AggregateRoot } from '@nestjs/cqrs';
import * as bcrypt from 'bcryptjs';

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
  hashPassword(): void;
  comparePassword(password: string): boolean;
}

export class UserModel extends AggregateRoot implements UserModelInterface {
  userEmailId: string;
  userPassword: string;
  userUUID: string;
  userName: string;
  accessLevel: AccessLevelType;

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

  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    const userHashPassword = bcrypt.hashSync(this.userPassword, salt);
    this.userPassword = userHashPassword;
  }
}
