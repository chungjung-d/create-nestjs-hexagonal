import { UserRepositoryPort } from '../../../../domain/port/database/user.repository.port';
import { UserModel } from '../../../../domain/core/model/user.model';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserRepository implements UserRepositoryPort {
  createUser(
    new_user: UserModel,
    transactionalEntityManager: EntityManager,
  ): Promise<void> {
    return Promise.resolve(undefined);
  }

  deleteUser(
    userUUID: string,
    transactionalEntityManager: EntityManager,
  ): Promise<void> {
    return Promise.resolve(undefined);
  }

  findAll(transactionalEntityManager: EntityManager): Promise<UserModel[]> {
    return Promise.resolve([]);
  }

  findById(
    userEmailId: string,
    transactionalEntityManager: EntityManager,
  ): Promise<UserModel> {
    return Promise.resolve(undefined);
  }

  findByUUID(
    userUUID: string,
    transactionalEntityManager: EntityManager,
  ): Promise<UserModel | null> {
    return Promise.resolve(undefined);
  }

  updateUser(
    user: UserModel,
    transactionalEntityManager: EntityManager,
  ): Promise<void> {
    return Promise.resolve(undefined);
  }
}
