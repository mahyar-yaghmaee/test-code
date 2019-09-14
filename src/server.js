const Hapi = require('hapi');

module.exports = async ({
  config = {},
  routes = [],
  plugins = []
} = {}) => {
  config.port = config.port || 3000;
  config.debug = false;

  const server = new Hapi.Server(config);

  await server.register(plugins);
  server.route(routes);

  return server;
};
