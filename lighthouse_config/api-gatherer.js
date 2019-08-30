'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToAPI extends Gatherer {
  afterPass(options) {
    const driver = options.driver;

    return driver.evaluateAsync('window.apiLoadTime')
      .then(apiLoadTime => {
        if (!apiLoadTime) {

          throw new Error('Unable to get api load tim metrics');
        }
        return apiLoadTime;
      });
  }
}

module.exports = TimeToAPI;