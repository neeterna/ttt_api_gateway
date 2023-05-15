import { Entity, Property, Unique } from '@mikro-orm/core';

import { BaseEntity } from './BaseEntity';

@Entity()
export class User extends BaseEntity {

  @Property()
  @Unique()
  username: string;

  @Property()
  password_hash: string;

  constructor(username: string, password_hash: string) {
    super();
    this.username = username;
    this.password_hash = password_hash;
  }

}
