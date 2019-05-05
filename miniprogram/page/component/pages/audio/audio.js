Page({
  onShareAppMessage() {
    return {
      title: 'audio',
      path: 'page/component/pages/audio/audio'
    }
  },

  data: {
    current: {
      poster: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000003GeKUb3y6ras.jpg?max_age=2592000',
      name: '此生惟你 (《倚天屠龙记》电视剧插曲)',
      author: '周深',
      src: 'http://dl.stream.qqmusic.qq.com/C400001dUzHj0Txu13.m4a?guid=7166179752&vkey=F77F3177F770043A2AC2DF7791362B62EF5B79A71943BA7DBC8E7E383101B8488F5846CE623089A32465B93C8400EF72AFCC403AA755C256&uin=0&fromtag=66',
    },
    audioAction: {
      method: 'pause'
    }
  }
})
