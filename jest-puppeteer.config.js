// jest-puppeteer.config.js
module.exports = {
  launch: {
    dumpio: false,
    headless: process.env.HEADLESS !== 'false',
    args: ['--window-size=1100,690','--disable-notifications']
  },
  verbose: true,
  // browser: 'chromium',
  // browserContext: 'default'
}
