// miniprogram/page/question/pages/poetry-tang/poetry-tang.js

const const_question = {
  "_id": 1,
  "type": "单选题",
  "stem": "这里是题干\n这里是题干\n这里是题干\n这里是题干",
  "correctAnswerCount": 0,
  "errorAnswerCount": 0,
  "answer": [{
      "id": 1,
      "content": "答案1"
    },
    {
      "id": 2,
      "content": "答案2"
    }
  ]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: {},
  },

  getNewQuestion(event) {
    wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
      })
      .then(res => {
        console.log(res.result.data[0]);
        this.setData({
          question: res.result.data[0]
        })
      })
      .catch(console.error)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
      })
      .then(res => {
        console.log('res.result.data0 = ', res.result.data[0]);
        this.setData({
          question: res.result.data[0]
        })
      })
      .catch(console.error)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '答题-唐诗',
      path: 'page/question/pages/poetry-tang/poetry-tang'
    }
  },

  doAnswer(event) {
    const items = this.data.question
    console.log(event.currentTarget.dataset.text)
    for (let i = 0; i < items.answer.length; ++i) {
      // 默认样式
      items.answer[i].type = 'default';
      // 所有按钮不可再次onclick
      items.answer[i].disabled = 'true';
      // 当前点击按钮
      if (items.answer[i].id === event.currentTarget.dataset.text) {
        if (event.currentTarget.dataset.text == 1) {
          items.answer[i].type = 'primary'
        } else {
          items.answer[i].type = 'warn'
        }
      }
      items.answer[0].type = 'primary'
    }
    this.setData({
      question: items
    })

    wx.cloud.callFunction({
      name: 'doAnswer',
    })

    let _this = this;
    setTimeout(function() {

      wx.cloud.callFunction({
          name: 'getQuestion',
          data: {},
        })
        .then(res => {
          console.log(res.result.data[0])
          _this.setData({
            question: res.result.data[0]
          })
        })
        .catch(console.error)
    }, 1000)

  },

})