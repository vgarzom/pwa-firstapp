'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class LoadAudit extends Audit {
  static get meta() {
    return {
      category: 'MyPerformance',
      name: 'api-audit',
      description: 'Schedule api response',
      failureDescription: 'Schedule Api slow to get response',
      helpText: 'Used to measure time from navigationStart to when the schedule' +
        ' api responds first time.',

      requiredArtifacts: ['TimeToAPI']
    };
  }

  static audit(artifacts) {
    const loadedTime = artifacts.TimeToAPI;

    const belowThreshold = loadedTime < MAX_API_TIME;

    return {
      rawValue: loadedTime,
      score: belowThreshold
    };
  }
}

module.exports = LoadAudit;