import { EntityManager } from 'typeorm';
import { UserModel } from '../../core/domain/model/user.model';

export interface UserDatabasePort {
  createUser: (
    newUser: UserModel,
    transactionalEntityManager: EntityManager,
  ) => Promise<void>;

  updateUser: (
    user: UserModel,
    transactionalEntityManager: EntityManager,
  ) => Promise<void>;

  findByUUID: (
    userUUID: string,
    transactionalEntityManager: EntityManager,
  ) => Promise<UserModel | null>;

  findById: (
    userEmailId: string,
    transactionalEntityManager: EntityManager,
  ) => Promise<UserModel>;
  findAll: (transactionalEntityManager: EntityManager) => Promise<UserModel[]>;

  deleteUser: (
    userUUID: string,
    transactionalEntityManager: EntityManager,
  ) => Promise<void>;
}
