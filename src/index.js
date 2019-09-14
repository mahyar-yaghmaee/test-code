const pkg = require('../package');
const serviceIdent = {
  name: pkg.name,
  version: pkg.build
};

const routes = require('./routes');
const plugins = require('./plugins')(serviceIdent);
const createServer = require('./server');

createServer({routes, plugins}).then((server) => {
  return server.start().then(() => {
    server.log([], `Server Started on port ${server.info.port}`);
  });
}).catch((err) => {
  process.exitCode = 1;
});
