module.exports = {
  async start() {
    await page.goto(`http://m.finset.io/intro`)
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
    const btnSelector = '#app > .v-application--wrap > main > #content > .btn-wrap'
    const elementHandle = await page.$('#nmPerson')
    await elementHandle.type('박준수')
    await this.click(btnSelector)
  },
  async ssnBirthInput() {
    const ssnBirthHandle = await page.$('#ssnBirth')
    const nextHandle = await page.$('#sex')
    await ssnBirthHandle.type('841029')
    await nextHandle.type('1')
  },
  async telecomCompanySelect() {
    const selector = '.c-select__layer > .c-select__modal > .c-select__options > .c-select__category > .c-select__item:nth-child(1)'
    const hpHandle = await page.$('#hp')
    await this.click(selector)
    await hpHandle.type('01026882453')
  },
  async goAgreement() {
    const selector = '.v-application--wrap > main > #content > .btn-wrap > .v-btn'
    await this.click(selector)
  },
  async agreementAllSelect() {
    const selector = '.modal-bg > .modal-body > .agree-row > .header > label'
    await this.click(selector)
  },
  async goCertification() {
    const btnSelector = '#content > #form-container-v0 > .modal-bg > .modal-body > .next-btn'
    await this.click(btnSelector)
  },

  async certificationInput() {
    const sertificationHandle = await page.$('.space-float > .container-v0 > .form-row > .sms-certification > input')
    await sertificationHandle.type('900000')
  },

  async goPasswordSetting() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async goMain() {
    const selector1 = 'main > section > .certcode-wrap > .number > a:nth-child(1)'
    const selector2 = 'main > section > .certcode-wrap > .number > a:nth-child(2)'
    const selector3 = 'main > section > .certcode-wrap > .number > a:nth-child(3)'
    
    await this.click(selector1)
    await this.click(selector1)

    await this.click(selector2)
    await this.click(selector2)

    await this.click(selector3)
    await this.click(selector3)
  },

  async goGoodsCompare() {
    const selector = '.space-bottomtab > .container-v0 > div > .loan-btn > .beforeIng'
    await this.click(selector)
  },

  async goGoodsCert() {
    const selector = '.space-float-sm > .container-v0 > .topintro > .btn-wrap > .v-btn'
    const goodsNoResultBtn = 'main > .bg-gray > .space-float > .goods-search-result-none > a'
    const goodsSearchBtn = '.bg-gray > .space-float > .btn-container-wrap > .v-btn > .v-btn__content'
    const compare = await page.$(selector)
    const search = await page.$(goodsNoResultBtn)
    if (compare === null && search === null) {
      await this.click(goodsSearchBtn)
    }
    if (compare === null) {
      await this.click(goodsNoResultBtn)
    } 
     else {
      await this.click(selector)
    }
  },

  async goGoodsSms() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async smsInput() {
    const smsHandle = await page.$('.space-float > .container-v0 > .form-row > .sms-certification > input')
    await smsHandle.type('900000')
  },

  async goGoodsSsn() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async ssnInput() {
    const ssnHandle = await page.$('.space-float > .container-v0 > .form-ssn > .back-wrap > input')
    await ssnHandle.type('9000000')
  },

  async goJobChoice() {
    const selector = 'main > .space-float > .container-v0 > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async backButton() {
    const selector = '.v-application--wrap > main > .header-wrapper > #header > .btn-back'
    await this.click(selector)
  },

  async goodsButton() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
    await page.waitForTimeout(1000)
    await this.backButton()
  },

  async nextButton() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async salarymanClick() {
    await this.goodsButton()
  },

  async officialClick() {
    const selector = 'main > .space-float > .container-v0 > .form-boxradio:nth-child(3) > label'
    await this.click(selector)
    await this.goodsButton()
  },

  async personalBusinessClick() {
    const selector = 'main > .space-float > .container-v0 > .form-boxradio:nth-child(4) > label'
    await this.click(selector)
    await this.goodsButton()
  },

  async freelencerClick() {
    const selector = 'main > .space-float > .container-v0 > .form-boxradio:nth-child(5) > label'
    await this.click(selector)
    await this.goodsButton()
  },

  async houseWifeClick() {
    const selector = 'main > .space-float > .container-v0 > .form-boxradio:nth-child(6) > label'
    await this.click(selector)
    await this.goodsButton()
  },

  async nameCompanyInput() {
    const selector = '#nameCompany'
    await this.click(selector)
  },

  async goCreditInsJobNm() {
    const selector = 'main > .space-float > .container > .link-arrow-wrap > .link-arrow-tiny'
    await this.click(selector)
  },

  async jobNameInput() {
    const comapnyHandle = await page.$('#company')
    const bizCompHandle = await page.$('#bizComp')
    await comapnyHandle.type('(주)한국금융솔루션')
    await bizCompHandle.type('5368601346')
  },

  async returnGoodsJob() {
    const selector = 'main > .space-float > .container > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async employmentType() {
    const selector = '#employeeType'
    await this.click(selector)
  },

  async modalEmploymentType() {
    const selector = '.c-select__layer > .c-select__modal > .c-select__options > .c-select__category > .c-select__item:nth-child(1)'
    await this.click(selector)
  },

  async dateJoin() {
    const selector = '#dateJoin'
    await this.click(selector)
  },

  async salaryInput() {
    const salaryHandle = await page.$('#yearIncome')
    await salaryHandle.type('5000')
  },

  async goJobDetail() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async clikcDate() {
    const selector = '.date-select > .date-select__layer > .date-select__options > .btn-container-wrap > .btn-sm-rm'
    await this.click(selector)
  },

  async occupationalInput() {
    const selector = '#occupational'
    await this.click(selector)
  }, 

  async occupationalOption() {
    const selector = '.c-select__layer--on > .c-select__modal > .c-select__options > .c-select__category > .c-select__item:nth-child(1)'
    await this.click(selector)
  },

  async workerPositionInput() {
    const selector = '#cdWorkerPosition'
    await this.click(selector)
  },

  async workerPositionOption() {
    const selector = '.c-select__layer--on > .c-select__modal > .c-select__options > .c-select__category > .c-select__item:nth-child(5)'
    await this.click(selector)
  },

  async goGoodsEtc() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async goodsEtcBtn() {
    const selector = 'main > .space-float > .container-v0 > .btn-wrap > .v-btn'
    await this.click('.container-v0 > .form-row:nth-child(2) > .form-tabradio-wrap > .form-tabradio:nth-child(2) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(2) > .form-tabradio-wrap > .form-tabradio:nth-child(3) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(2) > .form-tabradio-wrap > .form-tabradio:nth-child(4) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(2) > .form-tabradio-wrap > .form-tabradio:nth-child(5) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(2) > .form-tabradio-wrap > .form-tabradio:nth-child(6) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(3) > .form-tabradio-wrap > .form-tabradio:nth-child(2) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(3) > .form-tabradio-wrap > .form-tabradio:nth-child(3) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(3) > .form-tabradio-wrap > .form-tabradio:nth-child(4) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(3) > .form-tabradio-wrap > .form-tabradio:nth-child(5) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(3) > .form-tabradio-wrap > .form-tabradio:nth-child(6) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(4) > .form-tabradio-wrap > .form-tabradio:nth-child(2) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(4) > .form-tabradio-wrap > .form-tabradio:nth-child(3) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(4) > .form-tabradio-wrap > .form-tabradio:nth-child(4) > label')
    await page.waitForTimeout(100)
    await this.click('.container-v0 > .form-row:nth-child(4) > .form-tabradio-wrap > .form-tabradio:nth-child(5) > label')
    await page.waitForTimeout(100)
    await this.click(selector)
  },

  async checkGoodsCar() {
    const selector = '.container-v0 > .form-row > .form-tabradio-wrap > .form-tabradio:nth-child(1) > label'
    await this.click(selector)
  },

  async carSelect() {
    const selector = '#cars'
    await this.click(selector)
  },

  async carSelectModal() {
    const selector = '.c-select__layer > .c-select__modal > .c-select__options > .c-select__category > .c-select__item:nth-child(1)'
    await this.click(selector)
  },

  async goCertUse() {
    const selector = '.v-application--wrap > main > .space-float > .btn-wrap > .v-btn'
    await this.click(selector)
  },

  async checkBoxClick() {
    const selector = '.container-v0 > div > .agree-row > .header > label'
    await this.click(selector)
  },

  async goCompare() {
    const selector = 'main > .space-float > .container-v0 > .btn-wrap > .v-btn'
    await this.click(selector)
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

