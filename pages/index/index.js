const app = getApp();
Component({

  data: {
    src: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/indexbc_img.png?sign=f68332243aaa14efff81e84738ac58a6&t=1557455993',
    arr: [{
      src: '/img/view.png',
      title: '视图'
    }, {
      src: '/img/border.png',
      title: '边线'
    }, {
      src: '/img/bgcolor.png',
      title: '颜色'
    }, {
      src: '/img/flex.png',
      title: '布局'
    }, {
      src: '/img/animation.png',
      title: '动画'
    }],
    type: false,
    bbstyle: false,
    arrow: true,
    imgsize: 50,
    iconsize: 45,
    size: 32,
    color: app.color,
    arrowcolor: app.color,


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

    /**
     * 重置
     */
    catchreset() {
      this.setData({
        type: false,
        bbstyle: false,
        arrow: true,
        imgsize: 50,
        iconsize: 45,
        size: 32,
        color: "#9791f0",
        arrowcolor: "#9791f0",
      })
      app.color = "#9791f0" ;
      app.arrowcolor = "#9791f0" ;
      this.triggerEvent('reset', {})
    },
    /**
     * 字体、箭头颜色设置  (两者可以单独设置颜色  此处为了省事  统一颜色值了)
     */
    changecolor() {
      let color = this.getRandomColor();
      app.color = color;
      this.setData({
        color: color,
        arrowcolor: color
      })
      this.triggerEvent("change", color)

    },
    getRandomColor() {
      const rgb = []
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
      }
      return '#' + rgb.join('')
    },
    /**
     * 字体大小
     */
    bindchanging(e) {
      let value = e.detail.value;
      this.setData({
        size: value
      })
    },
    /**
     * 左边图片大小
     */
    changimg(e) {
      let value = e.detail.value;
      this.setData({
        imgsize: value
      })
    },
    /**
     * 箭头大小
     */
    changarrow(e) {
      let value = e.detail.value;
      this.setData({
        iconsize: value
      })
    },
    /**
     * 开关设置
     */
    setno_1(e) {
      console.info(e.detail)
      this.setData({
        bbstyle: e.detail.value ? true : false
      })
    },
    setno_2(e) {
      this.setData({
        type: e.detail.value ? true : false
      })
    },
    setno_3(e) {
      this.setData({
        arrow: e.detail.value ? true : false
      })
    },
    /**
     * 列表选择的结果
     */
    _chooseOne(e) {

      let index = e.currentTarget.dataset.index;
      console.info('当前选择的下标', index)
      switch (index) {
        case 0:
          wx.navigateTo({
            url: '/pages_one/view/view',
          })
          break;
        case 1:
          wx.navigateTo({
            url: '/pages_one/line/line',
          })
          break;
        case 2:
          wx.navigateTo({
            url: '/pages_one/color/color',
          })
          break;
        case 3:
          wx.navigateTo({
            url: '/pages_one/position/position',
          })
          break;
        default:
          this.toast.showmodel();
          break;
      }
    },

  },


})