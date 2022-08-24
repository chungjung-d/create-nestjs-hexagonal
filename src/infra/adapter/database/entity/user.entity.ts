import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  accessLevelType,
  UserType,
} from '../../../../domain/core/type/entity-type/user.type';
import { stringLength } from '../../../../domain/core/constant/string.length';

@Entity('user_tb')
export class User implements UserType {
  @PrimaryGeneratedColumn('uuid')
  userUUID: string;

  @Column({ type: 'string', unique: true, length: stringLength.MEDIUM })
  userEmailId: string;

  @Column({ type: 'string', length: stringLength.LONG })
  userPassword: string;

  @Column({ type: 'string', unique: true, length: stringLength.SHORT })
  userName: string;

  @Column({
    type: 'enum',
    enum: accessLevelType,
    default: accessLevelType.USER,
  })
  accessLevel: accessLevelType;
}
