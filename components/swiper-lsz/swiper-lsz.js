// components/swiper-lsz/swiper-lsz.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type: { //轮播图类型  swiper（普通样式） card（卡片样式） tower（层叠样式）
      type: String,
      value: 'swiper'
    },
    height: {
      type: Number,
      value: 400
    },
    list: { //轮播的内容
      type: Array,
      vlaue: []
    },
    ind_dots: { //是否显示指示点
      type: Boolean,
      value: false
    },
    ind_type: { //指示点形状  （暂时提供   圆形：circle，心形:heart, ）
      type: String,
      value: 'circle'
    },
    ind_color: { //指示点颜色 （注：ind_type为circle时有效）
      type: String,
      value: "rgba(0,0,0,.3)"
    },
    ind_active_color: { //当前指示点颜色 （注：ind_type为circle时有效）
      type: String,
      value: "#ffffff"
    },
    autoplay: { //是否自动播放
      type: Boolean,
      value: false
    },
    current: { //当前滑块的下标
      type: Number,
      value: 0
    },
    interval: { //自动切换时间间隔
      type: Number,
      value: 4000
    },
    duration: { //滑动动画时长
      type: Number,
      value: 500,
    },
    circular: { //是否采用衔接
      type: Boolean,
      value: false
    },
    // vertical: { //是否纵向 （暂时未处理）
    //   type: Boolean,
    //   value: false
    // },
    dis_mul_items: { //同时显示的滑块数量
      type: Number,
      value: 1
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    nowindex: 0,
  },
  lifetimes: {
    attached() {
      this.setData({
        nowindex: this.data.current
      })
    },
    ready() {


    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // current改变时会触发_bindchange事件 ,{current,source} , source是变化的原因 ：touch人为改变，autoplay 自动播放导致改变
    bindchange(e) {
      if (e.detail.soure == 'touch') {
        let index = e.detail.current;
        this.setData({
          nowindex: index
        })
      } else {
        let index = e.detail.current;
        this.setData({
          nowindex: index
        })
      }
    },

    //  自定义事件
    _catchtap(e) {
      let index = e.currentTarget.dataset.index;
      let item = e.currentTarget.dataset.item;
      this.triggerEvent('Tap', {
        index,
        item
      });
    },

      // 初始化towerSwiper
  // towerSwiper(name) {
  //     let list = name;
  //      list[0].flag=false;
  //      console.info('你好')
  //     for (let i = 0; i < list.length; i++) {
  //       list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
  //       list[i].mLeft = i - parseInt(list.length / 2)
  //     }
  //     this.setData({
  //       towerList: list
  //     })
  //   },

    // towerSwiper触摸开始
    // _towerStart(e) {
    //   this.setData({
    //     towerStart: e.touches[0].pageX
    //   })
    //   this.triggerEvent('Start');
    // },

    // towerSwiper计算方向
    // _towerMove(e) {
    //   this.setData({
    //     direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    //   })
    //   this.triggerEvent('Start');
    // },

    // towerSwiper计算滚动
    // _towerEnd(e) {
    //   let direction = this.data.direction;
    //   let list = this.data.towerList;
    //   if (direction == 'right') {
    //     let mLeft = list[0].mLeft;
    //     let zIndex = list[0].zIndex;
    //     for (let i = 1; i < list.length; i++) {
    //       list[i - 1].mLeft = list[i].mLeft
    //       list[i - 1].zIndex = list[i].zIndex
    //     }
    //     list[list.length - 1].mLeft = mLeft;
    //     list[list.length - 1].zIndex = zIndex;
    //     this.setData({
    //       towerList: list
    //     })
    //   } else {
    //     let mLeft = list[list.length - 1].mLeft;
    //     let zIndex = list[list.length - 1].zIndex;
    //     for (let i = list.length - 1; i > 0; i--) {
    //       list[i].mLeft = list[i - 1].mLeft
    //       list[i].zIndex = list[i - 1].zIndex
    //     }
    //     list[0].mLeft = mLeft;
    //     list[0].zIndex = zIndex;
    //     this.setData({
    //       towerList: list
    //     })
    //   }
    //   this.triggerEvent('Start')
    // },

  }
})