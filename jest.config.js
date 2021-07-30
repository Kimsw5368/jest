const TEST_TARGET = process.env.TEST_TARGET || 'staging.gitple.io';
const HEADLESS = process.env.HEADLESS !== 'false';

module.exports = {
  preset: 'jest-puppeteer',
  displayName: TEST_TARGET,
  globals: {
    env: {
      target: TEST_TARGET,
      headless: HEADLESS
    }
  }
};
