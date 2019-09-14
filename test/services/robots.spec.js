const createTestServer = require('../support/testServer');
const robots = require('../../src/services/robots');

describe('Robots.txt Plugin', () => {
  const getServer = () => createTestServer(robots);

  it('should expose GET /robots.txt', async () => {
    let server = await getServer();
    const res = await server.inject('/robots.txt')
    expect(res.statusCode).to.equal(200);
    expect(res.result).to.equal('User-agent: *\nDisallow: /');
  });
});
