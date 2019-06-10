// pages/map/map.js
let util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  catchinpout(e) {
    this.setData({
      address: e.detail.value
    })
    app.mapApi.getSuggestion({ //关键词提示
      keyword: e.detail.value,
      success: res => {
        console.info('腾讯推荐-----结果：', res)
        this.setData({
          arr: res.data ? res.data : [],

        })
      }
    })

  },
  /**
   * 选择一个提示的地址
   */
  chooseOne(e) {
    let item = e.currentTarget.dataset.item;
    console.info('这是-----item：', item)
    let latitude = item.location.lat;
    let longitude = item.location.lng;
    this.setData({
      latitude: item.location.lat,
      longitude: item.location.lng,
      title: item.title,
      address: item.title,
      markers: [{
        latitude: item.location.lat,
        longitude: item.location.lng,
        title: '这个是什么？',
        zIndex: 1000,
        width: 15,
        height: 20,
        callout: {
          content: item.title,
          color: '#8dc63f',
          borderWidth: 1,
          borderColor: '#8dc63f',
          borderRadius: 8,
          padding: 8,
          display: 'ALWAYS',
          textAlign: 'center'

        }

      }]
    })
  },
  /**
   * 打开地图
   */
  openMap(e) {
    let item = e.currentTarget.dataset.item;
    let latitude = item.location.lat;
    let longitude = item.location.lng;
    wx.openLocation({
      latitude,
      longitude,
      scale: 18
    })

  },
  /**
   * 地址搜索
   */
  catchtap() {

    let address = this.data.address;
    app.mapApi.geocoder({
      address: address,
      success: res => {
        console.info('点击搜索-----结果：', res)
        let latitude = res.result.location.lat;
        let longitude = res.result.location.lng;
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      },
      fail: res => {
        console.info('fail-----------', res)
      },
      complete: res => {
        if (res.message == '查询无结果')
          wx.showToast({
            title: '输入详细地址',
          })
        console.info('complete-----------', res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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