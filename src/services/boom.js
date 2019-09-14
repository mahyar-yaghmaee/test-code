
module.exports = {
  name: 'boom',
  version: '1.0.0',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/boom',
      handler(request, context) {
        throw new Error('Test');
      }
    });
  }
};
