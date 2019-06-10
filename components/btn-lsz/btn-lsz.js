// components/btn-lsz/btn-lsz.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    size:{  //按钮尺寸大小  xs  s  m  l    
      type:String,
      value:"xs"
    },
    bc_color:{  //按钮背景色
      type:String,
      value:''
    },
    color:{  //按钮字体颜色  （背景色和 字体色 只能填写一个 ，否则只取背景色）
     type:String,
     value:''
    },
    radius:{ //按钮弧度
      type:Number,
      value:0
    },
    content:{ // 按钮内容
      type:String,
      value:'按钮'
    }
    


  },
  lifetimes: {
    attached() {
      let color=this.data.color,
        bc_color = this.data.bc_color;
      if (color && bc_color){
        this.setData({
          color:''
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
   * 组件的初始数据
   */
  data: {
     
  },

  /**
   * 组件的方法列表
   */
  methods: {
    catchtap(){
      this.triggerEvent("Click");
    }
  }
})
