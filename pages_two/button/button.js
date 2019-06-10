// pages/button/button.js
let util = require('../../utils/util.js');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:app.color ,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 自定义事件
   */
  catchClick(e){
   console.info(e)
   let index=e.currentTarget.dataset.index;
   this.setData({
     index:index+1,
   })
    this.window.showmodel();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.window=this.selectComponent("#window");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    return  util.share();
  }
})