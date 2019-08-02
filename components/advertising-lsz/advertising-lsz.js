// components/advertising-lsz/advertising-lsz.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{  //广告标题
      type:String,
      value:'标题'
    },
    array: {  //广告内容
      type: Array,
      value: ['广告内容', '广告内容', '广告内容']
    },
    height: {  //广告栏高度
      type: Number,
      value: 35
    },
    interval: { //切换时间间隔
      type: Number,
      value: 4000
    },
    duration: {  //滑动时长
      type: Number,
      value: 2000
    },
    vertical:{ //播放方向  false :纵向  true :横向
      type:Boolean,
      value:false
    }


  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached() {
      if (this.data.array instanceof  Array){
      }else{
        this.setData({
          array: []
        })
      }
    },
    ready() {

    },
    detached() {
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    chooseOne(e){
    let  item={
      index:e.currentTarget.dataset.index,
      item:e.currentTarget.dataset.item
    }
    this.triggerEvent('Choose',item)
    }
  }
})
