export const borrowers = [
  { name: 'Peter Lustig',    matNr: '11112345',
    keys:[
      '0', '1', '2', '3', '4', '12'
    ]
  },
  { name: 'Max Mustermann',  matNr: '11115432',
    keys:[
      '1', '3', '5', '7', '9'
    ]
  },
  { name: 'Jane Doe',        matNr: '12345678',
    keys:[
      '6', '7', '8', '9', '10'
    ]
  },
  { name: 'John Doe',        matNr: '87654321',
    keys:[
      '11', '12', '13', '15', '18'
    ]
  },
  { name: 'Albert Einstein', matNr: '10001000',
    keys:[
      '16', '17', '18', '19', '1'
    ]
  },
]

// 24 hrs -> 24*60*60*1000
const lendBefore24Hours = Date.now()-(24*60*60*1000)
const lendBefore6Hours  = Date.now()-(6 *60*60*1000)
const lendBefore1Hour   = Date.now()-(   60*60*1000)

export const keys = [
  { id: '0',  lend:false,           opens:['0.203'], },
  { id: '1',  lend:false,           opens:['0.318'], },
  { id: '2',  lend:false,           opens:['0.102'], },
  { id: '3',  lend:'Max Mustermann',opens:['1.345'],
    lendTime: lendBefore24Hours
  },
  { id: '4',  lend:false,           opens:[
    '0.203','0.205','0.207'
  ], },
  { id: '5',  lend:false,           opens:['2.232'], },
  { id: '6',  lend:'Jane Doe',      opens:['3.123'],
    lendTime: lendBefore1Hour
  },
  { id: '7',  lend:false,           opens:['0.502'], },
  { id: '8',  lend:false,           opens:[
    '1.111','2.222'
  ], },
  { id: '9',  lend:'Jane Doe',      opens:['0.503'],
    lendTime: lendBefore24Hours
  },
  { id: '10', lend:false,           opens:['0.504'], },
  { id: '11', lend:false,           opens:['0.404'], },
  { id: '12', lend:'Peter Lustig',  opens:[
    '0.502','0.503','0.505','0.506'
  ], lendTime: lendBefore6Hours },
  { id: '13', lend:false,           opens:['1.404'], },
  { id: '14', lend:false,           opens:['0.401'], },
  { id: '15', lend:'John Doe',      opens:['3.123'],
    lendTime: lendBefore24Hours
  },
  { id: '16', lend:false,           opens:[
    '0.244','0.402','0.402'
  ], },
  { id: '17', lend:false,           opens:['0.402'], },
  { id: '18', lend:'John Doe',      opens:['3.222'],
    lendTime: lendBefore24Hours
  },
  { id: '19', lend:false,           opens:['2.333'], },
]
