const loopIndefinitelyError = error =>
  Message({ error }, console.log("loop-indefinitely-error"));

class IndefiniteLooper {
  constructor(fn, opts) {
    this.fn = fn;
    this.interval = opts.interval;
    this.stopped = false;
    this.logger = opts.logger;

    this.init();
  }

  async init() {
    while (!this.stopped) {
      try {
        this.delay = IndefiniteLooper.delay(this.interval);
        this.promise = this.fn();
        await this.promise;
        await this.delay;
      } catch (err) {
        this.logger.log(loopIndefinitelyError(err));
      }
    }
  }

  static async delay(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  stop() {
    this.stopped = true;
  }
}

module.exports = IndefiniteLooper;
