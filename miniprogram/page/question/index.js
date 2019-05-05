// miniprogram/page/question/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 'chart',
        name: '排行',
        url: 'chart/chart'
      },
      {
        id: 'answer',
        name: '我要答题',
        open: false,
        pages: [{
            zh: '成语(暂不可用，请勿理会)',
            url: 'idiom/idiom'
          },
          {
            zh: '唐诗(点我)',
            url: 'poetry-tang/poetry-tang'
          }, {
            zh: '宋词(暂不可用，请勿理会)',
            url: 'ci-poetry-song/ci-poetry-song'
          }
        ]
      }, {
        id: 'question',
        name: '我想出题',
        open: false,
        pages: [{
            zh: '出题',
            url: 'new-question/new-question'
          },
          {
            zh: '我的题目',
            url: 'my-question/my-question'
          }
        ]
      }, {
        id: 'my-error',
        name: '我的错题本',
        url: 'my-error/my-error'
      }
    ]
  },

  /**
   * 导航栏切换
   */
  kindToggle(e) {
    const id = e.currentTarget.id;
    const list = this.data.list;
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
      title: '云答题展示',
      path: 'page/question/index'
    }
  }
})