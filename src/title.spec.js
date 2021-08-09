const lib = require('./lib.js');
jest.setTimeout(30000)

describe('Workspace Basic', () => {
  beforeAll(async () => {
   await lib.start()
  });

    it('should be moved to the member/chert page', async () => {
      await lib.goSignUp()
      await page.waitForTimeout(500)
    })

    it('should be name entered in the inputBox', async () => {
      await lib.nmPersonInput()
      await page.waitForTimeout(500)
    })

    it('should be ssnBirth entered in the inputBox', async () => {
      await lib.ssnBirthInput()
      await page.waitForTimeout(500)
    })

    it('should be hp entered in the inputBox', async () => {
      await lib.telecomCompanySelect()
      await page.waitForTimeout(500)
    })

    it('should be moved to the agreementSelect modal', async () => { 
      await lib.goAgreement()
      await page.waitForTimeout(500)
    })

    it('should be checked to the checkbox', async () => {
      await lib.agreementAllSelect()
      await page.waitForTimeout(500)
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

    it('should be moved to the goods/compare page', async() => {
      await lib.goGoodsCompare()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/cert page', async() => {
      await lib.goGoodsCert()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/sms page', async() => {
      await lib.goGoodsSms()
      await page.waitForTimeout(500)
    })

    it('should be CertificationNumber entered in the inputBox', async() => {
      await lib.smsInput()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/sns page', async() => {
      await lib.goGoodsSsn()
      await page.waitForTimeout(500)
    })

    it('should be ssnNumber entered in the inputBox', async() => {
      await lib.ssnInput()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/joobChoice page', async() => {
      await lib.goJobChoice()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/job page and return goods/joobChoice page', async() => {
      await lib.salarymanClick()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/job page and return goods/joobChoice page', async() => {
      await lib.officialClick()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/job page and return goods/joobChoice page', async() => {
      await lib.personalBusinessClick()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/job page and return goods/joobChoice page', async() => {
      await lib.freelencerClick()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/job page and return goods/joobChoice page', async() => {
      await lib.houseWifeClick()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/job page', async() => {
      await lib.nextButton()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/creditSrcJobNm page', async() => {
      await lib.nameCompanyInput()
      await page.waitForTimeout(500)
    })

    it('hould be moved to the goods/CreditInsJobNm page', async() => {
      await lib.goCreditInsJobNm()
      await page.waitForTimeout(500)
    })

    it('should be jobNameInput entered in the inputBox', async() => {
      await lib.jobNameInput()
      await page.waitForTimeout(500)
    })

    it('should be returned to the goods/job page', async() => {
      await lib.returnGoodsJob()
      await page.waitForTimeout(500)
    })

    it('should be moved to the modal page', async() => {
      await lib.employmentType()
      await page.waitForTimeout(500)
    })

    it('should be EmploymentType entered in the inputBox', async() => {
      await lib.modalEmploymentType()
      await page.waitForTimeout(500)
    })

    it('should be moved to the date modal', async() => {
      await lib.dateJoin()
      await page.waitForTimeout(500)
    })

    it('should be dateJoin entered in the inputBox', async() => {
      await lib.clikcDate()
      await page.waitForTimeout(500)
    })

    it('should be salary entered in the inputBox', async() => {
      await lib.salaryInput()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/jobDetail page', async() => {
      await lib.goJobDetail()
      await page.waitForTimeout(500)
    })
    
    it('should be moved to the occupational modal', async() => {
      await lib.occupationalInput()
      await page.waitForTimeout(500)
    })

    it('should be occupational entered in the inputBox', async() => {
      await lib.occupationalOption()
      await page.waitForTimeout(500)
    })

    it('should be moved to the workerPosition modal', async() => {
      await lib.workerPositionInput()
      await page.waitForTimeout(500)
    })

    it('should be workerPosition entered in the inputBox', async() => {
      await lib.workerPositionOption()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/etc in the page', async() => {
      await lib.goGoodsEtc()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/car page', async() => {
      await lib.goodsEtcBtn()
      await page.waitForTimeout(500)
    })

    it('should be moved to the goods/certUse page', async() => {
      await lib.goCertUse()
      await page.waitForTimeout(500)
    })

    it('', async() => {
      await lib.checkBoxClick()
      await page.waitForTimeout(500)
    })

    it('', async() => {
      await lib.goCompare()
      await page.waitForTimeout(25000)
    })
})
