// pages/swiper/swiper.js
let util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: ['https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/ceshi.jpg?sign=8f313eed7dd016242a340e4810598d61&t=1557735789', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/indexbc_img.png?sign=acc74fa19408672a008b86dd20f7864b&t=1557735843', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E9%9B%AA%E6%99%AF.jpg?sign=aaec34f247ec658b18799c5cad81ea2d&t=1557744391', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%B0%B4%E7%8F%A0.jpg?sign=552187353d98f1f6a758ce6dfa9f394f&t=1557744737', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%A0%91%E6%9C%A8.jpg?sign=ae3572e7fb4318119506f5bd07f2d053&t=1557744419', 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E5%B1%B1%E6%B0%B4.jpg?sign=7561a832b093674db059a39f3f11d495&t=1557744436'],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/ceshi.jpg?sign=8f313eed7dd016242a340e4810598d61&t=1557735789'
    }, {
      id: 1,
      type: 'image',
        url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/indexbc_img.png?sign=acc74fa19408672a008b86dd20f7864b&t=1557735843',
    }, {
      id: 2,
      type: 'image',
        url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E9%9B%AA%E6%99%AF.jpg?sign=aaec34f247ec658b18799c5cad81ea2d&t=1557744391'
    }, {
      id: 3,
      type: 'image',
        url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%B0%B4%E7%8F%A0.jpg?sign=552187353d98f1f6a758ce6dfa9f394f&t=1557744737'
    }, {
      id: 4,
      type: 'image',
        url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E6%A0%91%E6%9C%A8.jpg?sign=ae3572e7fb4318119506f5bd07f2d053&t=1557744419'
    }, {
      id: 5,
      type: 'image',
        url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/images/public/%E5%B1%B1%E6%B0%B4.jpg?sign=7561a832b093674db059a39f3f11d495&t=1557744436'
    }],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.towerSwiper('swiperList');
    this.towerSwiper2('swiperList');
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    console.info('触发  1111111111111111111111')
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
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
  // towerSwiper2
  // 初始化towerSwiper2
  towerSwiper2(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex2 = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper
  // 初始化towerSwiper2
  towerSwiper2(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex2 = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft2 = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart2(e) {
    this.setData({
      towerStart2: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove2(e) {
    console.info('触发  222222222222222222')
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart2 > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd2(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft2 = list[0].mLeft2;
      let zIndex2 = list[0].zIndex2;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft2 = list[i].mLeft2
        list[i - 1].zIndex2 = list[i].zIndex2
      }
      list[list.length - 1].mLeft2 = mLeft2;
      list[list.length - 1].zIndex2 = zIndex2;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft2 = list[list.length - 1].mLeft2;
      let zIndex2 = list[list.length - 1].zIndex2;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft2 = list[i - 1].mLeft2
        list[i].zIndex2 = list[i - 1].zIndex2
      }
      list[0].mLeft2 = mLeft2;
      list[0].zIndex2 = zIndex2;
      this.setData({
        swiperList: list
      })
    }
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