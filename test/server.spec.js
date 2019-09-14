const {setupServer} = require('./setup_server');

describe('server', () => {
  it('should start the server without error', async () => {
    const server = await setupServer();
    await server.start();
    await server.stop();
  }).timeout(3000); // Increasing timeout since .start() function may take some time to execute

  it('should set a default port if no config is provided', async () => {
    const server = await setupServer({});
    expect(server.info.port).to.equal(3000);
    await server.stop();
  });

  describe('The endpoints tests', () => {
    let server;

    before(async () => {
      server = await setupServer();
    });

    after(async () => await server.stop());

    describe('GET => endpoint /', () => {
      it('returns a 200', async () => {
        const response = await server.inject('/');
        expect(response.statusCode).to.equal(200);
      });

      it('serves up some HTML', async () => {
        const response = await server.inject('/');
        expect(response.headers['content-type']).to.startWith('text/html');
      });
    });
  });
});
