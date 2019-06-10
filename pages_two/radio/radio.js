// pages/radio/radio.js
let util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      { title: '唐玄奘' },
      { title: '孙悟空' },
      { title: '猪悟能6666666666666' },
      { title: '沙悟净' },
      { title: '广力菩萨' }
    ],
    arr2: [
      { title: '9528' },
      { title: '9527' },
      { title: '9526' },
      { title: '9525455865454551555455' },
      { title: '9523' },
      { title: '9528' },
      { title: '9527' },
      { title: '9526' },
      { title: '9525' },
      { title: '9523' },
      { title: '9522' },
      { title: '9521' },
      { title: '9520' }
    ],
    arr3: [
      { title: '三清' },
      { title: '如来' },
      { title: '观音' },
      { title: '雨滴' },
      { title: '唐玄奘' },
      { title: '孙悟空' },
      { title: '猪悟能' },
      { title: '沙悟净' },
      { title: '广力菩萨' }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  


  },
  chooseRadio() {
    console.info('单无默认选择框弹出事件')
    this.radio.radioshow();
    wx.getSystemInfo({
      success: res => {
        this.setData({
          windowHeight: res.windowHeight,
          flag: this.radio.data.flag
        })
      },
    })
  },
  chooseRadios() {
    console.info('单有默认选择框弹出事件')
    this.radios.radioshow();
    wx.getSystemInfo({
      success: res => {
        this.setData({
          windowHeight: res.windowHeight,
          flag: this.radios.data.flag
        })
      },
    })
    
  },
  chooseBox() {
    console.info('复选择框弹出事件')
    this.checkbox.radioshow();
    wx.getSystemInfo({
      success: res => {
        this.setData({
          windowHeight: res.windowHeight,
          flag: this.checkbox.data.flag
        })
      },
    })
  },
  bindslot(e) {
    console.info(e)
  },

  /**
   * 取消按钮
   */
  bindcancel(e) {
    this.setData({
      flag:false,
    })
    console.info('选择后的结果：', e)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.radio = this.selectComponent("#radio");
    this.radios = this.selectComponent("#radios");
    this.checkbox = this.selectComponent("#checkbox");
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  catchtouchmove(){

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return util.share();
  }
})