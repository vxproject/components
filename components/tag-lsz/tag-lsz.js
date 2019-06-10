// components/tag-lsz/tag-lsz.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
     type:{  //徽章形状   no：直接  base :基本类型   circle：圆角
       type:String,
       value:"no"
     },
     
     color:{ //字体颜色   ( 字体颜色和背景色  只能写一条,同时使用时  color有效)
       type:String,
       value:""
     },
     bgColor:{ //背景色
        type:String,
        value:""
     }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached() {
     if(this.data.color!=''&&this.data.bgColor!=''){
      this.setData({
        bgColor:''
      })
     }
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

  }
})
