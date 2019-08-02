// pages_two/commonSidebar/commonSidebar.js
let util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: app.src,
    arr: [
      { title: '(向右滑动)', cont: 'right' },
      { title: '(向左滑动)', cont: 'left' },
      { title: '(向上滑动)', cont: 'top' },
      { title: '(向下滑动)', cont: 'bottom' }
    ],//普通的

    Arr: [
      { title: '· 抽屉式侧边栏一', text: 'right', txt: '(向右滑动)', type: 1 },
      { title: '· 抽屉式侧边栏一', text: 'left', txt: '(向左滑动)', type: 1 },
      { title: '· 抽屉式侧边栏二', text: 'right', txt: '(向右滑动)', type: 2 },
      { title: '· 抽屉式侧边栏二', text: 'left', txt: '(向左滑动)', type: 2 }
    ]



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 普通侧边
   */
  choose(e) {
    let title = e.currentTarget.dataset.title;
    app.pageTo({ _titleurl: 'pages_three', _url: 'side-common', _param: title })
  },
  /**
   * 抽屉式
   */
  chooseBox(e) {
    let item = e.currentTarget.dataset.item;
    if (item.type == 1) {
      app.pageTo({ _titleurl: 'pages_three', _url: 'side-drawerone', _param: item })
    } else {
      app.pageTo({ _titleurl: 'pages_three', _url: 'side-drawer', _param: item })
    }
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