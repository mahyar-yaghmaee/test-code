const R = require('ramda');
const Hapi = require('hapi');

module.exports = async (...plugins) => {
  const server = new Hapi.Server({port: 0});

  await server.register(R.flatten(plugins));

  return server;
};

