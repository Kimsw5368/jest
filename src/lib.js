module.exports = {
  async start() {
    await page.goto(`http://dev.finset.io/intro`);
    await page.setViewport({ width: 1100, height: 690 });
  },
  async click(selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
  },
  async type(selector, text) {
    await this.click(selector);
    await page.type(selector, text);
  },
  async closeModal() {
    const selector = '.c-modal-wrap > .c-main-modal > .c-modal-img_main > #button-wrapper-mydata > button:nth-child(1)'
    await this.click(selector)
  },
  async goSignUp() {
    await page.waitForTimeout(1000)
    const selector = '.v-application--wrap > .service-intro > #content > .btn-container-wrap > .btn-sm-rm'
    await this.click(selector)
  },
  async nmPersonInput() {
    await page.waitForTimeout(1000)
    const selector = '#nmPerson'
    const buttonSelector = '#app > .v-application--wrap > main > #content > .btn-wrap'
    await page.$eval(selector, el => el.value = '김성욱')
    await this.click(buttonSelector)
    await page.waitForSelector(1000)
  },
  async ssnBirthInput() {
    this.nmPersonInput()
    await page.waitForTimeout(1000)
    const selector = '#ssnBirth'
    const nextSelector = '#sex'
    await page.$eval(selector, el => el.value = '000525')
    await page.waitForTimeout(500)
    await page.$eval(nextSelector, el => el.value = '3')
  },
  // async telecomCompanySelect() {
  //   await page.waitForTimeout(1000)
  //   const selector = '#telecomCompany'
  //   const listSelector = '.c-select__layer > .c-select__modal > .c-select__options > .c-select__category > .c-select__item:nth-child(2)'
  //   await this.click(selector)
  //   await page.waitForTimeout(500)
  //   await this.click(listSelector)
  // },
  async moveLoan() {
    const selector = '.row > .col-md-6 > .textW > .c-btn > a'
    await page.evaluate( () => {
      window.scrollBy(0, window.innerHeight);
    })
    await page.waitForTimeout(1000)
    await page.waitForSelector(selector)
    await page.hover(selector)
    await page.waitForTimeout(1000);
    await this.click(selector)
  },
  async compareSteps() {
    const selector = '.c-space-bottom > .container > .d-flex > .c-goodscompany > .c-btn-primary'
    await page.evaluate( () => {
      window.scrollBy(0, window.innerHeight);
    })
    await page.waitForSelector(selector)
    await page.hover(selector)
    await page.waitForTimeout(1000);
    await page.click(selector)
  },
  async agreeClick() {
    const selector = '.v-form > .agree-row > .header > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    await page.evaluate( () => {
      window.scrollBy(0, window.innerHeight);
    })
    await page.waitForSelector(selector)
    await page.click(selector)
  },
  async moveTopMenu(id) {
    const selector = `.session-status-container > .session-status > #dropdown${id}List > span > .session-status-label`;
    await this.click(selector);
  },
  async clickSideMenu(title) {
    const selector = `.al-sidebar-list .al-sidebar-list-item[title="${title}"] > .al-sidebar-list-link`;
    await this.click(selector);
  },
  async clickSideSubMenu(title) {
    const selector = `.al-sidebar-list .ba-sidebar-sublist-item[title="${title}"] > .al-sidebar-list-link`;
    await this.click(selector);
  },
  async clickToggleSideSubMenu(title) {
    const selector = `.al-sidebar-list .al-sidebar-list-item.with-sub-menu[title="${title}"] > .al-sidebar-list-link`;
    await this.click(selector);
  },
  async getText(element) {
    if (typeof element === 'string') {
      element = await page.waitForSelector(element);
    }

    const property = await element.getProperty('textContent');
    const text = await property.jsonValue();
    return text;
  },
  async checkText(element, exepectText) {
    const text = await this.getText(element);
    await expect(text).toMatch(exepectText);
  }
}

