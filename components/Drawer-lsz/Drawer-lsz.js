Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type: {   //侧边栏类型   普通式 :false ;  抽屉式：true  
      type: Boolean,
      value: false,
    },
    sidebarType: {  //抽屉式类型   抽屉式侧边(1)：false ,抽屉式侧边(2)：true
      type: Boolean,
      value: false
    },
    direction: {  //侧边栏滑动方向  right ：向右  left:向左    top：向上（type为false有效）  bottom：向下（type为false有效） 
      type: String,
      value: 'right',

    },


  },
  // observer: {
  //   direction: function (direction) {
  //     console.info('这是监听器-----', this.data.direction)

  //   }

  // },
  lifetimes: {
    attached() {


    },
    ready() {
      let type = this.data.type;  //侧边栏类型
      let direction = this.data.direction;//侧边栏滑动方向
      let sidebarType = this.data.sidebarType; //抽屉式时类型 
      // 如果是抽屉式的侧边栏，滑动方向不为  左右  ，则会采用 抽屉式类型一的方式呈现，即默认值方式
      if (type && direction!='right'&&direction!='left'){
        this.setData({
          direction: 'right',
          sidebarType: false

        })
      }
      


    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    Lordflag: true,
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
