const createTestServer = require('../support/testServer');
const statusService = require('../../src/services/status');

describe('Status Plugin', () => {
  const getServer = () => createTestServer({
    plugin: statusService,
    options: {
      name: 'the service name',
      version: 'the service version'
    }
  });

  it('should expose GET /ping', async () => {
    let response = await (await getServer()).inject('/ping');

    expect(response).to.shallowDeepEqual({
      statusCode: 200,
      result: {
        name: 'the service name',
        version: 'the service version'
      }
    });

    expect(response.result).to.have.property('pong');
    expect(response.result).to.have.property('memMB');
  });
});
