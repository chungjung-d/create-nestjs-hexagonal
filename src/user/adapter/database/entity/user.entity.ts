import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  AccessLevelType,
  AccessLevel,
  UserType,
} from '../../../core/type/entity-type/user.type';
import { stringLength } from '@global/constant/string.length';

@Entity('user_tb')
export class User implements UserType {
  @PrimaryGeneratedColumn('uuid')
  userUUID: string;

  @Column({ unique: true, length: stringLength.MEDIUM })
  userEmailId: string;

  @Column({ length: stringLength.LONG })
  userPassword: string;

  @Column({ nullable: true, unique: true, length: stringLength.SHORT })
  userName: string;

  @Column({
    default: AccessLevel.USER,
  })
  accessLevel: AccessLevelType;
}
