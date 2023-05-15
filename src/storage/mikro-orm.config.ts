import { Options } from '@mikro-orm/core';
import { User, BaseEntity } from './entities';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config: Options = {
  type: 'sqlite',
  dbName: 'data.sqlite3',
  // as we are using class references here, we don't need to specify `entitiesTs` option
  entities: [User, BaseEntity],
  highlighter: new SqlHighlighter(),
  debug: true,
};

export default config;
