const app = getApp();
Component({
  data: {
    rorate: false,
    array: [
      { title: '输入框组件', color: 'red' },
      { title: '轮播组件', color: 'orange' },
      { title: '弹窗组件', color: 'yellow' },
      { title: '侧边栏', color: 'olive' },
      { title: '选择框', color: 'green' },
      { title: '导航', color: 'cyan' },
      { title: '徽章', color: 'blue' },
      { title: '按钮', color: 'purple' },
      { title: '图标', color: 'mauve' },
      { title: '广告', color: 'pink' },
      { title: '倒计时', color: 'brown' },
      { title: '地图', color: 'grey' }

    ],
    btnFlag: false,

  },
  lifetimes: {
    created (){
    
    },
    attached() {
      // 在组件实例进入页面节点树时执行
      this.toast = this.selectComponent("#toast");
       this.setData({
         color:app.color
       })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  methods: {
    /**
     * 输入事件
     */
    catchinput(e) {
      console.info(e)
    },
  
    catchtap() {
      wx.makePhoneCall({
        phoneNumber: '15516152770',
      })
    },
    navMusic() {
      wx.navigateTo({
        url: '/pages_three/bcmusic/bcmusic',
      })
    },
    nav(e) {
      let index = e.currentTarget.dataset.index;
      console.info('选择的是-----', index)
      switch (index) {

        case 1:
          wx.navigateTo({
            url: '/pages_two/swiper/swiper',
          })
          break;
        case 2:
          wx.navigateTo({
            url: '/pages_two/window/window',
          })
          break;
        case 3:
          wx.navigateTo({
            url: '/pages_two/commonSidebar/commonSidebar',
          })
          break;
        case 4:
          wx.navigateTo({
            url: '/pages_two/radio/radio',
          })
          break;
        case 5:
          wx.navigateTo({
            url: '/pages_two/navigation-lsz/navigation-lsz',
          })
          break;
        case 6:
          wx.navigateTo({
            url: '/pages_two/tag/tag',
          })
          break;
        case 7:
          wx.navigateTo({
            url: '/pages_two/button/button',
          })
          break;
        case 8:
          wx.navigateTo({
            url: '/pages_two/icon/icon',
          })
          break;
        case 9:
          wx.navigateTo({
            url: '/pages_two/advertising/advertising',
          })
          break;
        case 10:
          wx.navigateTo({
            url: '/pages_two/time/time',
          })
          break;
        case 11:
          wx.navigateTo({
            url: '/pages_two/map/map',
          })
          break;

        default:
          this.toast.showmodel();

          break;
      }


    },

    onShareAppMessage() {

    }
  },

})