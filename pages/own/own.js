// pages/own/own.js
const app = getApp();
Component({

  /**
   * 页面的初始数据
   */
  data: {
    src:'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%B0%B4%E7%8F%A0.jpg?sign=fa0fefd1ae8f1d8a5b26b174d54a2c00&t=1558423463',
    arrayList: [{ title: '关于' }, { title: '日志' }]
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
      let index = e.detail.index;
      switch (index) {
        case 0:
          app.pageTo({ _titleurl: 'pages_four', _url:'own_about'})
          break;
     
        default:
          this.toast.showmodel();
          break;

      }
    },



    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
  }
})