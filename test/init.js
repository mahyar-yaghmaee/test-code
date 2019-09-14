process.env.NODE_ENV = 'test';

const chai = require('chai');
global.expect = chai.expect;

chai.use(require('chai-as-promised'));
chai.use(require('chai-shallow-deep-equal'));
chai.use(require('chai-string'));
