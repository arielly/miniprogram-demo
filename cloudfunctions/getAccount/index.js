// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'miniprogram-demo-arielly',
})
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {

  let openid = event.openid
  console.log('openid = ', openid)

  // 获取用户当前的答题进度
  let account
  await db.collection('account').where({
    _id: openid,
  }).get().then(res => {
    account = res.data[0]
    console.log('exist account = ', account)
  })

  // 有数据返回，没数据则创建初始数据
  if (account == '' || account == undefined) {
    account = {
      _id: openid,
      idx: 1,
      rightCount: 0,
      errorCount: 0
    }
    await db.collection('account').add({
        // data 字段表示需新增的 JSON 数据
        data: account
      })
      .then(res => {
        console.log('res = ', res)
        console.log('add account = ', account)
      })
  } else {
    console.log('get account = ', account)
  }

  return account
}