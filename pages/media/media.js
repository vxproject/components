const app = getApp();
Component({

  /**
   * 页面的初始数据
   */
  data: {
    src:'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E9%9B%BE%E5%87%87.jpg?sign=df8335f2e2a3037f87850cc8ecab10a0&t=1558407303',
    arrayList: [{ title: '背景' }, { title: '视频' }, { title: '图片相机' }]
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.toast = this.selectComponent("#toast");
      this.setData({
        color: app.color,
        arrowcolor: app.color,
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    catchchooseOne(e) {
      console.info('媒体列表点击事件----对象', e)
      let index = e.detail.index;
      switch (index) {
        case 0:
          wx.navigateTo({
            url: '/pages_three/bcmusic/bcmusic',
          })
          break;
        default:
          this.toast.showmodel();
          break;


      }
    }

  },

})