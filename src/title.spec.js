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
      await lib.goertification()
      await page.waitForTimeout(1000)
    })

    it('shoild be moved to the member/certCode page', async () => {
      await lib.certificationInput()
      await page.waitForTimeout(1000)
    })

    it('', async () => {
      await lib.passwordSetting()
      await page.waitForTimeout(1000)
    })
})
