const {
  Writable
} = require('stream');

class NoopStream extends Writable {
  constructor(options) {
    super(options);
  }
  _write(chunk, encoding, cb) {
    cb();
  }
}

module.exports = {
  NoopStream
};
