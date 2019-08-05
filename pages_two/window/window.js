// pages/window/window.js
let util = require('../../utils/util.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     this.setData({
       color:app.color,
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //获得dialog组件
    this.showmodel = this.selectComponent("#showmodel");
    this.showmodel2 = this.selectComponent("#showmo");
    console.info(this.showmodel)
  },
  show() {
    // 调用弹窗弹起的方法
    this.showmodel.showmodel();
  
  },
  show2() {
    // 调用弹窗弹起的方法
    this.showmodel2.showmodel();
  },
  /**
   * 弹窗 事件
   */
  dbButton(e) {

    console.info(this.showmodel) //第一种取参数
    // console.info(e) //第二中 去参数
    if (this.showmodel.btn == 'confirm') { //confirm  确认   cancel 取消
      console.info('确认====下一步处理')

    } else {
      console.info('取消===下一步处理时间')
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
     return util.share();
  }
})