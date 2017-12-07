const basicGoods = [
  {
    id: '1234561',
    name: 'Mineral Water 550ml',
    barcode: '12421432143214321',
    price: '2.00',
    num: '1',
    amount: '2.00',
  },
  {
    id: '1234562',
    name: 'Herbal Tea 300ml',
    barcode: '12421432143214322',
    price: '3.00',
    num: '2',
    amount: '6.00',
  },
  {
    id: '1234563',
    name: 'Delicious Potato Chips',
    barcode: '12421432143214323',
    price: '7.00',
    num: '4',
    amount: '28.00',
  },
  {
    id: '1234564',
    name: 'Special Delicious Egg Roll',
    barcode: '12421432143214324',
    price: '8.50',
    num: '3',
    amount: '25.50',
  },
];

const basicProgress = [
  {
    key: '1',
    time: '2017-10-01 14:10',
    rate: 'Contact Customer',
    status: 'processing',
    operator: 'Pickup ID1234',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2017-10-01 14:05',
    rate: 'Contact Customer',
    status: 'success',
    operator: 'Pickup ID1234',
    cost: '1h',
  },
  {
    key: '3',
    time: '2017-10-01 13:05',
    rate: 'Pickup Orders',
    status: 'success',
    operator: 'Pickup ID1234',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2017-10-01 13:00',
    rate: 'Approval Application',
    status: 'success',
    operator: 'Pickup ',
    cost: '1h',
  },
  {
    key: '5',
    time: '2017-10-01 12:00',
    rate: 'Initial Return Request',
    status: 'success',
    operator: 'Pickup',
    cost: '5mins',
  },
];

const advancedOperation1 = [
  {
    key: 'op1',
    type: 'Order Realtionship Effective',
    name: 'Qu Lili',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op2',
    type: 'Financial Review',
    name: 'Qu Lili',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Do not pass the reason',
  },
  {
    key: 'op3',
    type: 'Submit Order',
    name: 'Lin Dongdong',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op4',
    type: 'Submit Order',
    name: 'Khan Teeth',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Great!',
  },
  {
    key: 'op5',
    type: 'Order Realtionship Effective',
    name: 'Qu Lili',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation2 = [
  {
    key: 'op1',
    type: 'Order Realtionship Effective',
    name: 'Qu Lili',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation3 = [
  {
    key: 'op1',
    type: 'Create Order',
    name: 'Khan',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

export const getProfileBasicData = {
  basicGoods,
  basicProgress,
};

export const getProfileAdvancedData = {
  advancedOperation1,
  advancedOperation2,
  advancedOperation3,
};

export default {
  getProfileBasicData,
  getProfileAdvancedData,
};
