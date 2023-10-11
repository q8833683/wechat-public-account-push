/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa055331714840fde',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0d20d345003eec056382ca2cece52cff',

  PROVINCE: '广东',
  CITY: '惠州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyGy76EcWCTNW1j_xm1yM4NswELQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'd5zeiWnev3srv29o8pPaGB5u5OiSJ3ZfJLOc1qgVvjo',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1993', date: '03-13',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '周同学', year: '1993', date: '02-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2009', date: '09-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2009-09-10' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2018-06-02' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyGy76EcWCTNW1j_xm1yM4NswELQ',
    }
  ],

}

module.exports = USER_CONFIG

