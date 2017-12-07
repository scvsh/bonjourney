export default {
  getNotices (req, res) {
    res.json([{
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'You have received 14 new weekly reports',
      datetime: '2017-08-09',
      type: 'notice'
    }, {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: 'You recommended Qu Nini has passed the third round of interviews',
      datetime: '2017-08-08',
      type: 'notice'
    }, {
      id: '000000003',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: 'This template can distinguish between a variety of notification types',
      datetime: '2017-08-07',
      read: true,
      type: 'notice'
    }, {
      id: '000000004',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
      title: 'The left icon is used to distinguish between different types',
      datetime: '2017-08-07',
      type: 'notice'
    }, {
      id: '000000005',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'content should not exceed two lines of words, automatic truncation beyond',
      datetime: '2017-08-07',
      type: 'notice'
    }, {
      id: '000000006',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Qu Lili commented on you',
      description: 'description information description information description',
      datetime: '2017-08-07',
      type: 'message',
    }, {
      id: '000000007',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Zhu right right reply you',
      description: 'This template is used to remind who interacted with you, left\' who\'on the left',
      datetime: '2017-08-07',
      type: 'message',
    }, {
      id: '000000008',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'title',
      description: 'This template is used to remind who interacted with you, left who\'s on the left',
      datetime: '2017-08-07',
      type: 'message',
    }, {
      id: '000000009',
      title: 'task name',
      description: 'Tasks need to be started before 2017-01-12 20:00',
      extra: 'not started',
      status: 'todo',
      type: 'to be done',
    }, {
      id: '000000010',
      title: 'Third-party emergency code change',
      description: 'Guan Lin submitted on 2017-01-06, need to be completed before 2017-01-07 code change task',
      extra: 'Expiring soon',
      status: 'urgent',
      type: 'to be done',
    }, {
      id: '000000011',
      title: 'Information Security Examinations',
      description: 'Assign Churl to be updated and released by 2017-01-09',
      extra: 'It took eight days',
      status: 'doing',
      type: 'to be done',
    }, {
      id: '000000012',
      title: 'ABCD Version Release',
      description: 'Guan Lin submitted on 2017-01-06, need to be completed before 2017-01-07 code change task',
      extra: 'in progress',
      status: 'processing',
      type: 'to be done',
    }]);
  },
};
