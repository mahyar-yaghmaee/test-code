
module.exports = {
  name: 'status',
  version: '1.0.0',
  register: async (server, options) => {
    const serverStatus = (request, context) => {
      return context.response({
        name: options.name,
        version: options.version,
        pong: new Date().toISOString(),
        memMB: (process.memoryUsage().rss / (1024 * 1024)).toFixed(2)
      });
    };

    server.route({
      method: 'GET',
      path: '/ping',
      handler: serverStatus
    });
  }
};
