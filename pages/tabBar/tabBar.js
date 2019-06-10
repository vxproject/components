// pages/tabBar/tabBar.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: app.color,
    selectId: 0,
    list: [{
      "pagePath": "/pages/index/index",
      "iconPath": "icon-21",
      "selectedIconPath": "icon-21",
      "text": "基础"
    },
    {
      "pagePath": "/pages/custom/custom",
      "iconPath": "icon-6",
      "selectedIconPath": "icon-6",
      "text": "组件"
    },
    {
      "pagePath": "/pages/media/media",
      "iconPath": "icon-9",
      "selectedIconPath": "icon-9",
      "text": "媒体"
    },
    {
      "pagePath": "/pages/own/own",
      "iconPath": "icon-49",
      "selectedIconPath": "icon-49",
      "text": "个人"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },

  /**
   * 重置
   */
  catchreset() {
    this.setData({
      color: "#9791f0"
    })
   
    console.info('重置-------按钮diaoyong', app.color)
  },
  /**
   * 改变tabbar 颜色
   */
  catchchange(e) {
    this.setData({
      color: e.detail
    })
  },
  chooseOne(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      selectId: index
    })
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
    this.scrolltop();
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
  scrolltop() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})