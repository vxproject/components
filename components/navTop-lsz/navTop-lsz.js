// components/navTop-lsz/navTop-lsz.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     content:{  //导航栏的内容
       type:String,
       value:''
     },
     position:{ //导航栏内容的位置    center:中间位置  left:左上角
       type:String,
       value:'center'
     },
     bc_nav:{ //导航栏背景色
        type:String,
       value:"linear-gradient(45deg, #3bb9f4, #00ec7e)"
     }




  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
