// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'miniprogram-demo-arielly',
})
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  const {
    OPENID,
    APPID
  } = cloud.getWXContext()
  console.log('openid = ' + OPENID + ', appid = ' + APPID)

  // 获取用户进度
  const account = await cloud.callFunction({
    name: 'getAccount',
    data: {
      openid: OPENID
    }
  })
  console.log(account)
  const account_idx = account.result.idx
  console.log('account.idx = ' + account_idx)

  // 查询题目并返回
  return db.collection('question').where({
    _id: account_idx
  }).limit(1).get()
}