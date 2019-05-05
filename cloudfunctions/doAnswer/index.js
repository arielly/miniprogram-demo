// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'miniprogram-demo-arielly',
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async(event, context) => {
  const {
    OPENID,
    APPID
  } = cloud.getWXContext()
  console.log('openid = ' + OPENID + ', appid = ' + APPID)

  // 修正用户进度并返回
  try {
    return await db.collection('account').where({
        _id: OPENID
      })
      .update({
        data: {
          idx: _.inc(1)
        },
      })
  } catch (e) {
    console.error(e)
  }
}