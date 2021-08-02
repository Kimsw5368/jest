module.exports = {
  async start() {
    await page.goto(`http://dev.finset.io/intro`)
    await page.setViewport({ width: 1200, height: 1000 })
  },
  async click(selector) {
    await page.waitForSelector(selector)
    await page.click(selector)
  },
  async type(selector, text) {
    await this.click(selector)
    await page.type(selector, text)
  },
  async goSignUp() {
    const selector = '.v-application--wrap > .service-intro > #content > .btn-container-wrap > .btn-sm-rm'
    await this.click(selector)
  },
  async nmPersonInput() {
    const selector = '#nmPerson'
    const btnSelector = '#app > .v-application--wrap > main > #content > .btn-wrap'
    const elementHandle = await page.$(selector)
    await elementHandle.type('김성욱')
    await this.click(btnSelector)
  },
  async ssnBirthInput() {
    const selector = '#ssnBirth'
    const nextSelector = '#sex'
    const ssnBirthHandle = await page.$(selector)
    const nextHandle = await page.$(nextSelector)
    await ssnBirthHandle.type('000525')
    await nextHandle.type('3')
  },
  async telecomCompanySelect() {
    const selector = '.c-select__layer > .c-select__modal > .c-select__options > .c-select__category > .c-select__item:nth-child(2)'
    const hpSelector = '#hp'
    const hpHandle = await page.$(hpSelector)
    await this.click(selector)
    await hpHandle.type('01012345678')
  },
  async goAgreement() {
    const selector = '.v-application--wrap > main > #content > .btn-wrap > .v-btn'
    await this.click(selector)
  },
  async agreementAllSelect() {
    const selector = '.modal-bg > .modal-body > .agree-row > .header > label'
    await this.click(selector)
  },
  async goertification() {
    const btnSelector = '#content > #form-container-v0 > .modal-bg > .modal-body > .next-btn'
    await this.click(btnSelector)
  },

  async certificationInput() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    const sertificationHandle = await page.$('.space-float > .container-v0 > .form-row > .sms-certification > input')
    await sertificationHandle.type('12345678')
    await this.click(selector)
  },

  async passwordSetting() {
    const selector1 = 'main > section > .certcode-wrap > .number > a:nth-child(1)'
    const selector2 = 'main > section > .certcode-wrap > .number > a:nth-child(2)'
    const selector3 = 'main > section > .certcode-wrap > .number > a:nth-child(3)'
    
    await this.click(selector1)
    await this.click(selector1)

    await this.click(selector2)
    await this.click(selector2)

    await this.click(selector3)
    await this.click(selector3)

    await this.click(selector1)
    await this.click(selector1)
    await this.click(selector1)

    await this.click(selector2)
    await this.click(selector2)

    await this.click(selector3)
    await this.click(selector3)

  },

  async getText(element) {
    if (typeof element === 'string') {
      element = await page.waitForSelector(element)
    }

    const property = await element.getProperty('textContent')
    const text = await property.jsonValue();
    return text;
  },
  async checkText(element, exepectText) {
    const text = await this.getText(element)
    await expect(text).toMatch(exepectText)
  }
}

