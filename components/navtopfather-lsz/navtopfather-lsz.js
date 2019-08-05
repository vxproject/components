// components/navTop-lsz/navTop-lsz.js
const app = getApp();
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    color: { //导航字体箭头颜色
      type: String,
      value: '#333'
    },
    bc_nav: { //导航栏背景色
      type: String,
      value: "linear-gradient(45deg, #3bb9f4, #00ec7e)"
    },
    center_title: {  // 中间标题
      type: String,
      value: ''
    }




  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached() {
      this.setData({
        navHeight: app.navHeight,
        statusBarHeight: app.statusBarHeight
      })
    },
    ready() {  //检测一下 初始下标的大小

    },

    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
 
  }
})
