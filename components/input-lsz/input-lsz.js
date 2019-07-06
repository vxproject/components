// components/input/input.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{ //标题的内容
      type:String,
      value:'标题'
    },
   
    colon:{  //是否带有标题头  （false ：显示；  true：隐藏）
      type:Boolean,
      value:false
    },
    value: {
      type:String,
      value:''
    },
    type: {  //输入类型   text文本输入键盘  number数字 idcard身份证输入  digit带小数点数字键盘 
      type:String,
      value:'text'
    },
    confirmtype: { //设置键盘右下角按钮的文字，仅在type='text'时生效
      type:String,
      value:'done'
    },
    focus:{
      type:Boolean,
      value:false
    },
    password:{//密码类型
      type:Boolean,
      value:false
    },
    placeholder:{ //占位符
      type:String,
      value:''
    },
    placeholderstyle:{ 
      type:String,
      value:''
    },
    placeholderClass:{
      type:String,
      value:''
    },
    disabled:{  //是否禁用
      type:Boolean,
      value:false
    },
    maxlength:{
      type:Number,
      value:140
    },
    cursorspacing:{
      type:Number,
      value:0
    },
    cursor:{  //指定光标位置
      type:Number,
      value:0
    },
    selectionstart: { //光标起始位置，自动聚集时有效，需与selection-end搭配使用
      type:Number,
      value:-1
    },
    selectionend: {
      type: Number,
      value: -1
    },
    adjustposition: { //键盘弹起时，是否自动上推页面
      type:Boolean,
      value:true
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
    /**输入监听 */
    bindinput(e){
      console.info('正在输入',e.detail.value);
      let newValue = e.detail;   //指定detail对象
      this.setData({
        value:e.detail.value
      })
      this.triggerEvent('input', newValue);
    },
    /**聚焦监听 */
    bindfocus(e){
      console.info('聚焦监听---', e.detail);
      let newValue = e.detail;   //指定detail对象
      this.triggerEvent('focus', newValue);
    },
    /**失焦监听 */
    bindblur(e) {
      console.info('失去焦点---', e.detail);
      let newValue = e.detail;   //指定detail对象
      this.triggerEvent('blur', newValue);
    },
    /**完成监听 */
    bindconfirm(e) {
      console.info('完成监听---', e.detail);
      let newValue = e.detail;   //指定detail对象
      this.triggerEvent('confirm', newValue);
    }
  }
})
