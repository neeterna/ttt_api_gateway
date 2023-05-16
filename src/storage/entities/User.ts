import { Entity, Enum, Property, Unique } from '@mikro-orm/core';

import { hashSync, compareSync } from 'bcrypt';

import { BaseEntity } from './BaseEntity';

// this is not the best solution, I know
const pepper = "s0/QwERtyP4$$w0rD";

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User extends BaseEntity {

  @Property()
  @Unique()
  username: string;

  @Property()
  password_hash: string;

  @Enum(() => Role)
  role!: Role;

  constructor(username: string, password: string, role?: Role) {
    super();

    this.username = username;
    this.password_hash = hashSync(password + pepper, 10);
    this.role = typeof (role) !== 'undefined' ? role : Role.USER;

  }

  isValidPassword(password: string) {
    return compareSync(password + pepper, this.password_hash);
  }

}
