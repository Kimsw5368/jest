const lib = require('./lib.js');

describe('Workspace Basic', () => {
  beforeAll(async () => {
   await lib.start();
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

    // it('', async () => {
    //   await lib.telecomCompanySelect()
    //   await page.waitForTimeout(1000)
    // })
  // it('should be moved to the chat/todo page', async () => {
  //   await lib.moveTopMenu('Check');
  //   await page.waitForTimeout(500);
  //   await lib.checkText('.chat-card-height-none-title-100 > chat-rooms > .chat-rooms-container > .chat-rooms-title > .body-small', '확인 목록');
  // });

  // it('should be moved to the chat/wait page', async () => {
  //   await lib.moveTopMenu('Wait');
  //   await page.waitForTimeout(500);
  //   await lib.checkText('.chat-card-height-none-title-100 #ba-agent-selector-btn', '대기 목록');
  // });

  // it('should be moved to the chat/inprogress page', async () => {
  //   await lib.moveTopMenu('Inprogress');
  //   await page.waitForTimeout(500);
  //   await lib.checkText('.chat-card-height-none-title-100 #ba-agent-selector-btn', '상담 목록');
  // });

  // it('should be moved to the chat/resolve page', async () => {
  //   await lib.moveTopMenu('Close');
  //   await page.waitForTimeout(500);
  //   await lib.checkText('.chat-card-height-none-title-100 > chat-rooms > .chat-rooms-container > .chat-rooms-title > .body-small', '종료 목록');
  // });

  // it('should be moved to the chat page', async () => {
  //   await lib.clickSideMenu('상담');
  //   await lib.checkText('.chat-card-height-none-title-100 > chat-rooms > .chat-rooms-container > .chat-rooms-title > .body-small', '상담 목록');
  // });

  // it('should be moved to the dashboards page', async () => {
  //   await lib.clickSideMenu('대시보드');
  //   await lib.checkText('dashboards > .page-layout > .page-header > .title > div', '대시보드');
  // });

  // it('should be expanded reports sub-menu', async () => {
  //   await lib.clickToggleSideSubMenu('통계');
  //   await page.waitForTimeout(1000);
  // });

  // it('should be moved to reports - session page', async () => {
  //   await lib.clickSideSubMenu('상담');
  //   await lib.checkText('report-sessions > .page-layout > .page-header > .title > div:nth-child(1)', '상담 통계');
  // });

  // it('should be moved to reports - agent state logs page', async () => {
  //   await lib.clickSideSubMenu('상담사 상태');
  //   await lib.checkText('agentstatelogs > .page-layout > .page-header > .title > div:nth-child(1)', '상담사 상태 통계');
  // });

  // it('should be moved to reports - activity logs page', async () => {
  //   await lib.clickSideSubMenu('활동 이력');
  //   await lib.checkText('activitylogs > .page-layout > .page-header > .title > div:nth-child(1)', '활동 이력');
  // });

  // it('should be moved to the sessions page', async () => {
  //   await lib.clickSideMenu('세션');
  //   await lib.checkText('session-list > .page-layout > .page-header > .title > div:nth-child(1)', '세션');
  // });

  // it('should be moved to the customers page', async () => {
  //   await lib.clickSideMenu('고객');
  //   await lib.checkText('customers > .page-layout > .page-header > .title > div:nth-child(1)', '고객');
  // });

  // it('should be expanded setting sub-menu', async () => {
  //   await lib.clickToggleSideSubMenu('설정');
  //   await page.waitForTimeout(1000);
  // });

  // it('should be moved to the faq page', async () => {
  //   await lib.clickSideSubMenu('FAQ 관리');
  //   await lib.checkText('faq-mgmt > .page-layout > .page-header > .title > div:nth-child(1)', 'FAQ 관리');
  // });

  // it('should be moved to the canned page', async () => {
  //   await lib.clickSideSubMenu('저장된 답변');
  //   await lib.checkText('canned > .page-layout > .page-header > .title > div:nth-child(1)', '저장된 답변');
  // });

  // it('should be moved to the tags page', async () => {
  //   await lib.clickSideSubMenu('태그');
  //   await lib.checkText('tags > .page-layout > .page-header > .title > div:nth-child(1)', '태그');
  // });

  // it('should be moved to the agents page', async () => {
  //   await lib.clickSideSubMenu('상담사 관리');
  //   await lib.checkText('agents > .page-layout > .page-header > .title > div:nth-child(1)', '상담사 관리');
  // });

  // it('should be moved to the permission page', async () => {
  //   await lib.clickSideSubMenu('권한 설정');
  //   await lib.checkText('permission > .page-layout > .page-header > .title > div:nth-child(1)', '권한 설정');
  // });

  // it('should be moved to the customer fields page', async () => {
  //   await lib.clickSideSubMenu('프로필 항목 관리');
  //   await lib.checkText('customerfields > .page-layout > .page-header > .title > div:nth-child(1)', '고객 프로필 항목 관리');
  // });

  // it('should be moved to the bots page', async () => {
  //   await lib.clickSideSubMenu('봇 관리');
  //   await lib.checkText('bots > .page-layout > .page-header > .title > div:nth-child(1)', '봇 관리');
  // });

  // it('should be moved to the routing page', async () => {
  //   await lib.clickSideSubMenu('배정');
  //   await lib.checkText('routing > .page-layout > .page-header > .title > div:nth-child(1)', '배정');
  // });

  // it('should be moved to the hours page', async () => {
  //   await lib.clickSideSubMenu('업무 시간');
  //   await lib.checkText('hours > .page-layout > .page-header > .title > div:nth-child(1)', '업무 시간');
  // });

  // it('should be moved to the brands page', async () => {
  //   await lib.clickSideSubMenu('브랜드 관리');
  //   await lib.checkText('brands > .page-layout > .page-header > .title > div:nth-child(1)', '브랜드 관리');
  // });

  // it('should be moved to the brand settings page', async () => {
  //   await lib.clickSideSubMenu('브랜드별 설정');
  //   await lib.checkText('inapp > .page-layout > .page-header > .title > div:nth-child(1)', '브랜드별 설정');
  // });

  // it('should be moved to the inapp-simulator page', async () => {
  //   await lib.clickSideSubMenu('채팅앱 테스트');
  //   await lib.checkText('inapp-simulator > .page-layout > .page-header > .title > div:nth-child(1)', '채팅앱 테스트');
  // });

  // it('should be moved to the dictionary page', async () => {
  //   await lib.clickSideSubMenu('사전');
  //   await lib.checkText('dictionary > .page-layout > .page-header > .title > div:nth-child(1)', '사전');
  // });

  // it('should be moved to the billing page', async () => {
  //   await lib.clickSideSubMenu('결제');
  //   await lib.checkText('billing > .page-layout > .page-header > .title > div:nth-child(1)', '결제');
  // });

  // it('should be moved to the profile page', async () => {
  //   await lib.clickSideSubMenu('계정');
  //   await lib.checkText('profile > .page-layout > .page-header > .title > div:nth-child(1)', '계정');
  // });

  // it('should be opend the inapp-chat', async () => {
  //   await lib.click('#al-sidebar-bottom > ba-menu-item > .al-sidebar-list-item > .al-sidebar-list-link > span');
  //   await lib.click('.font-ko #gitple-launcher-icon');
  // });

  // it('should be opend the user-state dropdown', async () => {
  //   await lib.click('.al-user-state > #user-state > div > .user-state-info > span');
  //   await lib.click('.page-top > .user-profile > .al-user-state > .dropdown-menu');
  // });
});
