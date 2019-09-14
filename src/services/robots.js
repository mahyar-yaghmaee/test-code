
module.exports = {
  name: 'robots',
  version: '1.0.0',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/robots.txt',
      handler(request, context) {
        return context.response('User-agent: *\nDisallow: /').type('text/plain');
      }
    });
  }
};
