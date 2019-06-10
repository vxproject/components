// components/list/list-lsz.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arrayList: {  //列表集合
      type: Array,
      value: [
        { src: '', title: '标题' },
        { src: '', title: '标题' },
        { src: '', title: '标题' },
      ]
    },
    type: {   //列表样式 true：卡片样式； false：一整行(默认)
      type: Boolean,
      value: false
    },
    bbstyle: {  //底边框   true：长（默认）  ；false:短  
      type: Boolean,
      value: false
    },
    arrow:{  //箭头  true：有箭头   ；false :没有箭头
      type: Boolean,
      value: false
    },
    imgsize: { //左边图标的尺寸  (有效值30-80)
      type: Number,
      value: 50
    },
    color: {  //颜色 （字体）
      type: String,
      value: "#000000"
    },
    size: { //字体大小 (有效值26-60)
      type: Number,
      value: 32
    },

    arrowcolor: { //右端的箭头颜色
      type: String,
      value: "#b6c2ce"
    },
    iconsize: { //箭头大小(有效值30-80)
      type: Number,
      value: 45
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
    ready() {  //
    let  that=this.data;
      if (that.imgsize > 80 ||  that.imgsize < 30 ){
        this.setData({
          imgsize: 50,
        })
      }
      if (that.size > 60 ||  that.size < 26 ) {
        this.setData({
          size: 32,
        })
      }
      if (that.arrow){
        if (that.iconsize > 80 || that.iconsize < 30) {
          this.setData({
            iconsize: 50,
          })
        }
      }
     
      
    },

    detached() {
      // 
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {


    _chooseOne(e){
      let  index=e.currentTarget.dataset.index;  //获取当前下标
      let item=e.currentTarget.dataset.item ;
      this.triggerEvent('chooseOne',{index,item});
    }

  }
})
