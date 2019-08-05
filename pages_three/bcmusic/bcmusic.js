let app = getApp();
let util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music: app.music,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let index = wx.getStorageSync('index') ? wx.getStorageSync('index'):0;
    this.data.music[index].flag = true;
    this.setData({
      id: index,
      music: this.data.music,
      color: app.color,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  chooseOne(e) {
    console.info(this.data.music)
    let index = e.currentTarget.dataset.index;
    let music = this.data.music;
    let beFlag = music[index].flag;
    let id=this.data.id;
    music.forEach(item => {
      item.flag = false;
    })
    music[index].flag = !beFlag;
    if (id == index && beFlag) { //同一个  切 为true   ，暂停
      app.bcmusic.pause();
    }
    if (id == index && !beFlag) { //同一个  切 为false   ，播放
      app.bcmusic.play();
    }
    if (id != index) { //不是同一个  切换歌曲并播放
      app.bcmusic.src = music[index].url;
      app.bcmusic.play();
      wx.setStorageSync('index', index)
    }
    this.setData({
      music: music,
      id: index
    })
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