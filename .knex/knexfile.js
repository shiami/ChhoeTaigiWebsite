// Update with your config settings.

import { host } from '../imports/api/pg';

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: host,
      port:     '5432',
      database: 'dictionary',
      user:     'postgres',
      password: '12345678'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: host,
      port:     '5432',
      database: 'dictionary',
      user:     'postgres',
      password: '12345678'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
