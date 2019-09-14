module.exports = (serviceID) => [
  require('./services/boom'),
  require('./services/favicon'),
  require('./services/robots'),
  require('inert'),
  require('vision'),
  {
    plugin: require('./services/status'),
    options: {
      name: serviceID.name,
      version: serviceID.version
    }
  }
];
