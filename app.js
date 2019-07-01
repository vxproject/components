//app.js
let mapApi = require('/components/qqmap-wx-jssdk.js')
let music=require('/utils/music.js')
App({
  onLaunch: function () {
    let updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
      wx.getSystemInfo({  //全屏目时候 获取导航信息用的
        success: res=>{
          let custom = wx.getMenuButtonBoundingClientRect();
          console.info('这是设备的信息',res)
          console.info('这是设备的信息', custom)
          this.statusBarHeight = res.statusBarHeight;
          this.navHeight = custom.bottom + custom.top - res.statusBarHeight;
          console.info('这BarHeight的高度', this.navHeight)
          console.info('这statusBarHeight的高度', this.statusBarHeight)
        },
      })
      // "tabBar": {
      //   "custom": true,
      //     "backgroundColor": "#ffffff",
      //       "list": [
      //         {
      //           "pagePath": "pages/index/index",
      //           "iconPath": "/img/tabbar/model.png",
      //           "selectedIconPath": "/img/tabbar/modelblue.png",
      //           "text": "基础"
      //         },
      //         {
      //           "pagePath": "pages/custom/custom",
      //           "iconPath": "/img/tabbar/more.png",
      //           "selectedIconPath": "/img/tabbar/moreblue.png",
      //           "text": "组件"
      //         },
      //         {
      //           "pagePath": "pages/media/media",
      //           "iconPath": "/img/tabbar/video.png",
      //           "selectedIconPath": "/img/tabbar/videoblue.png",
      //           "text": "媒体"
      //         },
      //         {
      //           "pagePath": "pages/own/own",
      //           "iconPath": "/img/tabbar/me.png",
      //           "selectedIconPath": "/img/tabbar/meblue.png",
      //           "text": "个人"
      //         }
      //       ]
      // },

  },
  src: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%A0%91%E6%9C%A8.jpg?sign=c2cfb278c12a0229f2b0efca9671d183&t=1558434601',  
  color:'#9791f0',
  music: music.music, 
  bcmusic: wx.createInnerAudioContext(), 
  onShow() {
    let index = wx.getStorageSync('index') ? wx.getStorageSync('index') : 0;
    this.bcmusic.autoplay = true;
    this.bcmusic.loop = true;
    this.bcmusic.title = this.music[index].title;
    this.bcmusic.src = this.music[index].url;
  },
  onHide() {
    this.bcmusic.stop();
  },

  mapApi: new mapApi({
    key:'UMUBZ-FAVHV-ZM6PZ-ULMA2-MXO6F-NVBIP'
  })
  
})