// components/topTab/topTab.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    arrayList: {
      type: Array,
      value: ['item', 'item', 'item'],
    },
    color: { //选中时字体和底边的颜色
      type: String,
      value: '#3cc51f'
    },
    itemindex:{  //初始导航下标 
      type:Number,
      value:0
    },
    lineWidth: { //底边划线的宽度
      type: String,
      value: '',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
   

  },
  lifetimes: {
    attached() {
      let length = this.data.arrayList.length || 0;
      let widthItem = length < 4 ? (100 / length).toFixed(2) : 25;
      this.setData({
        widthItem: widthItem
      })
    },
    ready(){  //检测一下 初始下标的大小
      let index=0
      if (this.data.itemindex>0){  //如果大于零
        this.data.itemindex >= this.data.arrayList.length - 1 ? index = this.data.arrayList.length - 1 : index = this.data.itemindex
      }else{ //如果小于零
        index=0
      }
      this.setData({
        itemindex:index
      })
      console.info(index)
      this.setTabLine(this.data.itemindex);
    },

    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击导航
     */
    _chooseOne(e) {
      let index = e.currentTarget.dataset.index; //当前点击的下标
      this.setData({
        itemindex: index
      })
      this.setTabLine(index);
     
      this.triggerEvent('chooseOne', {
        index
      });
    },
    /**
     * 
     */
    setTabLine(index){
      let translateX = 0;
      Promise.all([this.getTabsList(`#itemindex${index}`), this.getScrollView('.scroll-view')])
        .then(res => {
          let tab = res[0], //tab 位置
            scroll = res[1]; //滚动距离
          translateX = scroll.scrollLeft + tab.left;
          let lineBoxWidth = tab.width;
          if (this.data.lineWidth) {
            this.setData({
              translateX: translateX,
              lineBoxWidth: lineBoxWidth,
            })
          } else {
            this.setData({
              translateX: translateX,
              lineBoxWidth: lineBoxWidth,
              lineWidth: `${lineBoxWidth}px`,
            })
          };
        })
    },

    /**
     * @method getScrollView
     * @description 获取 scroll-view 滚动距离
     */
    getScrollView(node) {
      return new Promise((resolve, reject) => {
        let query = wx.createSelectorQuery().in(this);
        query.select(node).fields({
          dataset: true,
          size: true,
          scrollOffset: true,
        }, res => {
          resolve(res)
        }).exec()
      })
    },
    /**
     * @method getTabsList
     * @description 获取 tab 位置
     */
    getTabsList(node) {
      return new Promise((resolve, reject) => {
        let query = wx.createSelectorQuery().in(this);
        query.select(node).boundingClientRect(res => {
          resolve(res)
        }).exec()
      })
    }

  }
})