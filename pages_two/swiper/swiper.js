// pages/swiper/swiper.js
let util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: ['https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/ceshi.jpg?sign=8f313eed7dd016242a340e4810598d61&t=1557735789', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/indexbc_img.png?sign=acc74fa19408672a008b86dd20f7864b&t=1557735843', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E9%9B%AA%E6%99%AF.jpg?sign=aaec34f247ec658b18799c5cad81ea2d&t=1557744391', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%B0%B4%E7%8F%A0.jpg?sign=552187353d98f1f6a758ce6dfa9f394f&t=1557744737', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%A0%91%E6%9C%A8.jpg?sign=ae3572e7fb4318119506f5bd07f2d053&t=1557744419', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E5%B1%B1%E6%B0%B4.jpg?sign=7561a832b093674db059a39f3f11d495&t=1557744436']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 轮播图
   */

  catchTap(e) {
    console.info(e)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    return util.share();
  }
})