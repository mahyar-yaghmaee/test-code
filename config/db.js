// This file will be used by the migrate script. Add your service's config.
//
// Remember: database names, hosts, usernames, and passwords are vault
// secrets for staging and production environments. You will likely want
// to expose them as environment variables first, then assign them here.
// See the hapi-service-template README for information on setting up
// vault secrets as environment variables:
// https://github.com/meetearnest/hapi-service-template

module.exports = {
  "development": {
    "database": "TBD",
    "username": "TBD",
    "password": "TBD",
    "host": "TBD",
    "dialect": "TBD",
    "define": {
      "paranoid": true,
      "deletedAt": 'deleted_at',
      "createdAt": 'created_at',
      "updatedAt": 'updated_at'
    },
    "logging": false
  },
  "test": {
    "database": "TBD",
    "username": "TBD",
    "password": "TBD",
    "host": "TBD",
    "dialect": 'postgres',
    "define": {
      "paranoid": true,
      "deletedAt": 'deleted_at',
      "createdAt": 'created_at',
      "updatedAt": 'updated_at'
    },
    "logging": false
  },
  "staging": {
    "database": "TBD",
    "username": "TBD",
    "password": "TBD",
    "host": "TBD",
    "dialect": 'postgres',
    "define": {
      "paranoid": true,
      "deletedAt": 'deleted_at',
      "createdAt": 'created_at',
      "updatedAt": 'updated_at'
    },
    "logging": false
  },
  "production": {
    "database": "TBD",
    "username": "TBD",
    "password": "TBD",
    "host": "TBD",
    "dialect": 'postgres',
    "define": {
      "paranoid": true,
      "deletedAt": 'deleted_at',
      "createdAt": 'created_at',
      "updatedAt": 'updated_at'
    },
    "logging": false
  }
}
