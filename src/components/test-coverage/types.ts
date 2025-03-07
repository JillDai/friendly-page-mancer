
export interface TestCaseTemplate {
  id: string;
  status: 'ACTIVE';
  title: string;
}

export interface Requirement {
  id: string;
  status: 'TO DO' | 'IN PROGRESS' | 'DONE';
  title: string;
  release?: string;
  testCaseTemplates: TestCaseTemplate[];
}

export const requirementsData: Requirement[] = [
  {
    id: 'TCTF-607',
    status: 'TO DO',
    title: 'Pre-SIT(Global契約)_Story_1',
    release: 'Release 01',
    testCaseTemplates: [
      {
        id: 'TCTF-623',
        status: 'ACTIVE',
        title: 'TCT 0825'
      },
      {
        id: 'TCTF-612',
        status: 'ACTIVE',
        title: 'TCT5'
      },
      {
        id: 'TCTF-611',
        status: 'ACTIVE',
        title: 'TCT4'
      },
      {
        id: 'TCTF-610',
        status: 'ACTIVE',
        title: 'TCT3'
      },
      {
        id: 'TCTF-609',
        status: 'ACTIVE',
        title: 'TCT2'
      },
      {
        id: 'TCTF-608',
        status: 'ACTIVE',
        title: 'TCT1'
      },
      {
        id: 'TCTF-159',
        status: 'ACTIVE',
        title: '定存解約'
      },
      {
        id: 'TCTF-158',
        status: 'ACTIVE',
        title: '定存盤戶-聯別(其他)'
      },
      {
        id: 'TCTF-157',
        status: 'ACTIVE',
        title: '定存盤戶-聯別(不動)'
      }
    ]
  },
  {
    id: 'TCTF-640',
    status: 'TO DO',
    title: 'Story_0825',
    release: 'Release 02',
    testCaseTemplates: [
      {
        id: 'TCTF-641',
        status: 'ACTIVE',
        title: 'Test 0825'
      },
      {
        id: 'TCTF-632',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      },
      {
        id: 'TCTF-631',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      },
      {
        id: 'TCTF-630',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      },
      {
        id: 'TCTF-629',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      }
    ]
  }
];
