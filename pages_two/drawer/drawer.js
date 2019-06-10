// pages/drawer/drawer.js
let util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(options)
    if(options.text=='抽屉'){
      this.setData({
        flag: options.flag == 'true' ? true : false,
        direction: options.direction,
        text: '抽屉'
      })
    }else{
      this.setData({
        direction: options.direction,
        text:'普通'
      })
    }
    
  },
  /**
   * 抽屉
   */
  catchtap(){  
    this.drawer.catchtap();
    
  },
  /**
   * 普通式
   */
  catchtapputong(){
    this.general.catchtap();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.drawer = this.selectComponent("#drawer"); // 抽屉式
    this.general = this.selectComponent("#general"); // 普通式
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