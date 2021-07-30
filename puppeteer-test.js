const puppeteer = require('puppeteer');

const gitpleUrl = 'workspace.gitple.io';
const headless = false;

(async () => {
  const browser = await puppeteer.launch({ headless: headless })
  const page = await browser.newPage()

  // page.setDefaultTimeout(30 * 1000)

  page.on('error', err => {
    console.log('ERROR: happen at the page:', err);
  });

  page.on('pageerror', err => {
    console.log('ERROR: pageerror occurred:', err);
  });

  try {
    await page.goto(`https://${gitpleUrl}/#/login`)

    await page.setViewport({ width: 1353, height: 607 })

    await page.waitForSelector('.auth-block-body #inputEmail3')
    await page.click('.auth-block-body #inputEmail3')

    await page.type('.auth-block-body #inputEmail3', 'agent')

    await page.waitForSelector('.auth-block-body #inputPassword3')
    await page.click('.auth-block-body #inputPassword3')

    await page.type('.auth-block-body #inputPassword3', 'agent0831')

    await page.waitForSelector('.ng-dirty > .form-group > .col-12 > .btn > .ladda-label')

    await page.click('.ng-dirty > .form-group > .col-12 > .btn > .ladda-label')

    if (!headless) {
      await page.waitForSelector('#onesignal-slidedown-container > #onesignal-slidedown-dialog > #normal-slidedown #onesignal-slidedown-cancel-button', { timeout: 30 * 1000 })
      await page.waitForTimeout(1000)
      await page.click('#onesignal-slidedown-container > #onesignal-slidedown-dialog > #normal-slidedown #onesignal-slidedown-cancel-button')
      await page.waitForTimeout(1000)
    }

    await page.waitForSelector('.slimScrollDiv > #al-sidebar-list > ba-menu-item:nth-child(2) > .al-sidebar-list-item > .al-sidebar-list-link')
    await page.click('.slimScrollDiv > #al-sidebar-list > ba-menu-item:nth-child(2) > .al-sidebar-list-item > .al-sidebar-list-link')
  } catch (e) {
    console.log(`ERROR: [${e.name}]`, e.message)
  }

  await browser.close()
})()
