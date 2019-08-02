// components/second/second.js
const app=getApp();
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type: { //组件类型有效值  modal（对话弹窗）  toast（普通弹窗）   
      type: String,
      value: 'modal'
    },
    title: {
      type: String,
      value: '标题',
    },
    content: {
      type: String,
      value: '内容'
    },
    iconcolor:{    //查号的颜色
      type:String ,
      value:""
    },
    //  以下四个属性仅对 type==modal 时 有效
    cancel: {
      type: String,
      value: '取消'
    },
    confirm: {
      type: String,
      value: '确定'
    },
    confirmColor: {
      type: String,
      value: '#3cc51f'
    },
    cancelColor: {
      type: String,
      value: '#9c9a9a'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false, //false 代表隐藏
  },

  lifetimes: {
   
    attached() {
      // 在组件实例进入页面节点树时执行
     this.setData({
       iconcolor:app.color,
       confirmColor: app.color
     })

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
     * 公有方法
     * 展示弹窗
     */
    showmodel() {
      this.setData({
        isShow: true
      })
    },
    // 阻止页面滑动
    catchtouchmove() {
      return ;
    },

    /**
     * 组件内部私有方法建议以_开启
     */
    _makeSure(e) {
      let title = e.currentTarget.dataset.title;
      let isShow = this.data.isShow;
      console.info('点击的是---', title)
      if (title == 'cancel') { //点击取消
        this.setData({
          isShow: !isShow
        })
      } else { //确定
        this.setData({
          isShow: !isShow
        })
      }
      this.btn = title; //第一种传递 把点击带的参数带上，以便引用组件页面 区分 点击的是确定还是取消 ；
      this.triggerEvent('dbButton', {})
      //第二中就是把  detail对象   指定 ，此处是 title
      // this.triggerEvent('dbButton', {title})

    }

  }
})