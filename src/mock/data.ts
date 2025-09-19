import Mock from "mockjs";
const Random = Mock.Random;

//纵览数据
export const overview = Mock.mock({
  "code": 200, //200正常、300未通过token验证、500错误、400功能拒绝
  "data": {
    "file": Random.float(60, 100, 2, 2) + "M",
    "article|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
  },
});

// 访问量
export const visit = Mock.mock({
  "data|30": [{
    //time
    "date": "@datetime('MM-dd')",
    "count|10-100": 12,
  }]
})

//数据监测
export const survey = Mock.mock({
  "data": {
    "device": [
      {
        "key": 'mobile',
        "name": '移动端',
        "value|30-120": 50
      },
      {
        "key": 'pc',
        "name": '桌面端',
        "value|30-120": 40
      }
    ],
    "website": [
      {
        "key": 'home',
        "name": '首页',
        "value|30-120": 50
      },
      {
        "key": 'project',
        "name": '项目',
        "value|30-120": 40
      },
    ]
  },
})

//评论
export const comment = Mock.mock({
  "data|123": {
    "count": 123,
    "list|123": [{
      "id|+1": 0,
      "article":{
        "id|+1": 2,
        "name": "@ctitle(3,12)",
      },
      "user": {
      "id|+1": 3,
      "name": "@ctitle(2,12)",
      "imgurl":"https://www.huohuo90.com:3003/user/6353b034dd4b583975e77fbe.png"
      },
      "comment": "@cparagraph(1,4)",
      "moment":"@datetime()",
      "complaint|0-5": 0
    }]
  }
})