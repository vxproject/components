// pages/advertising/advertising.js
let util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
       arr:[
         '新闻-----1 ---条新闻-----1 ---条新闻-----1 ---条新闻-----1 ---条新闻-----1 ---条',
         '新闻-----2 ---条新闻-----2 ---条新闻-----2 ---条新闻-----2 ---条新闻-----2 ---条',
         '新闻-----3 ---条新闻-----3 ---条新闻-----3 ---条新闻-----3 ---条新闻-----3 ---条',
       ],
    Arr: [
      '全场9.9元,售完为止！！！',
      '中国将迎来新一轮的机遇！美国心急了',
      '普京增中国一重器',
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 选择一个
   */
  catchChoose(e){
    console.info(e)
    this.setData({
      item:e.detail
    })
    this.showmodel2.showmodel();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.showmodel2 = this.selectComponent("#showmo");
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