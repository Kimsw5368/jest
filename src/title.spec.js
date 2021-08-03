const lib = require('./lib.js');

describe('Workspace Basic', () => {
  beforeAll(async () => {
   await lib.start()
  });

    it('should be moved to the member/chert page', async () => {
      await lib.goSignUp()
      await page.waitForTimeout(1000)
    })

    it('should be name entered in the inputBox', async () => {
      await lib.nmPersonInput()
      await page.waitForTimeout(1000)
    })

    it('should be ssnBirth entered in the inputBox', async () => {
      await lib.ssnBirthInput()
      await page.waitForTimeout(1000)
    })

    it('should be hp entered in the inputBox', async () => {
      await lib.telecomCompanySelect()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the agreementSelect modal', async () => { 
      await lib.goAgreement()
      await page.waitForTimeout(1000)
    })

    it('should be checked to the checkbox', async () => {
      await lib.agreementAllSelect()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the member/certSms page', async () => {
      await lib.goCertification()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the member/certCode page', async () => {
      await lib.certificationInput()
      await page.waitForTimeout(1000)
    })

    it('should be looked to the success message', async () => {
      await lib.passwordSetting()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the main page', async() => {
      await lib.goMain()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the goods/cert page', async() => {
      await lib.goLoanCompare()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the goods/sms page', async() => {
      await lib.goGoodsSms()
      await page.waitForTimeout(1000)
    })

    it('should be CertificationNumber entered in the inputBox', async() => {
      await lib.smsInput()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the goods/sns page', async() => {
      await lib.goGoodsSsn()
      await page.waitForTimeout(1000)
    })

    it('should be ssnNumber entered in the inputBox', async() => {
      await lib.ssnInput()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the goods/joobChoice page', async() => {
      await lib.goJobChoice()
      await page.waitForTimeout(1000)
    })

    it('should be moved to the goods/job page and return goods/joobChoice page', async() => {
      await lib.salarymanClick()
      await page.waitForTimeout(1000)
      await lib.officialClick()
      await page.waitForTimeout(1000)
    })

})
