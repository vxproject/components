// 目录导航
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    array: {  //目录
      type: Array,
      value: []
    },
    arrindex: { //默认选中的目录下标
      type: Number,
      value: 0
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached() {

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
    /**
     * 选择目录
     * 
     */
    chooseOne(e) {
      let item = {};
      item.index = e.currentTarget.dataset.index;
      item.item = e.currentTarget.dataset.item;
      this.setData({
        arrindex: item.index
      })
      this.triggerEvent('Click', item);
    }

   
  
    



  }
})
