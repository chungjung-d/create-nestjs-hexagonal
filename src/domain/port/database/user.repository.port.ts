import { EntityManager } from 'typeorm';
import { UserModel } from '../../core/model/user.model';

export interface UserRepositoryPort {
  createUser: (
    new_user: UserModel,
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
