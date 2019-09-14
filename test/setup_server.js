const pkg = require('../package');
const serviceIdent = {
    name: pkg.name,
    version: pkg.build
};
const routes = require('../src/routes');
const createServer = require('../src/server');
const defaultConfig = require('./config');
const plugins = require('../src/plugins')(serviceIdent);

module.exports.setupServer = (config = defaultConfig) => createServer({config, routes, plugins});
