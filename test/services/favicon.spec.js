const createTestServer = require('../support/testServer');
const favicon = require('../../src/services/favicon');

describe('Favicon Plugin', () => {
  const getServer = () => createTestServer(favicon);

  it('should expose GET /favicon.ico', async () => {
    let response = await (await getServer()).inject('/favicon.ico');
    expect(response.statusCode).to.equal(200);
  });
});
