/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe3bb2457da590bc6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7bc62fcaaab41f0ede40f8fd1cf8a068',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小陈老师',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onLgV55YX8VNj7BK9pmmjFQYMArs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'KfiWaOejFRYj2PXxlXjQYII8v1Bj7Cf0JEkQGDZ9xL4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: '乖乖', year: '2000', date: '06-06',
//         },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '乖乖', year: '2000', date: '07-07',
        },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '6rFTYz3ljkAu401cobNWIz5vc5VrxLmvwp6AD1eQn3Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onLgV58eRL_09aVUDxcyjSZbhTWc',
    }
  ],

}

module.exports = USER_CONFIG

