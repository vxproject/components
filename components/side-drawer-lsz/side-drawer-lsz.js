Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    direction: {   //侧边栏方向有效值，right ：向右  left:向左  
      type:String,
      value:'left'
    }
  },
  lifetimes: {
    attached() { //组件初始化
      let direction = this.data.direction;
      if (direction == 'right' || direction == 'left' ) {
      } else {
        this.setData({
          direction: 'right'
        })
      }
    },
    ready() { //渲染页面时

    },
    detached() {
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    Lordflag: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 公用方法 隐藏与展示
    catchtap() {
      this.setData({
        Lordflag: !this.data.Lordflag
      })
    }
  }
})
