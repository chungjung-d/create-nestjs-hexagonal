import { UserModel } from '../../../core/domain/model/user.model';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UserDatabasePort } from '../../../port/database/user.database.port';
import { User } from '../entity/user.entity';
import { UserMapper } from '../../../core/application/mapper/user.mapper';

@Injectable()
export class UserMariadbAdapter implements UserDatabasePort {
  constructor(private userMapper: UserMapper) {}

  async createUser(
    newUser: UserModel,
    transactionalEntityManager: EntityManager,
  ): Promise<void> {
    const userRepository = transactionalEntityManager.getRepository(User);
    const userEntity = this.userMapper.modelToEntity(newUser);
    await userRepository.save(userEntity);
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
