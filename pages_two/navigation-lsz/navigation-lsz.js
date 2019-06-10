// pages/topTab/topTab.js
let util = require('../../utils/util.js');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: app.src,
    color:app.color,
    arr: ['唐玄奘', '孙悟空', '猪悟能', '沙悟净', '广力菩萨'],  
    index: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 目录导航使用的集合
    let  list=[];
     for(let i=0;i<26;i++){
       list[i] = String.fromCharCode(65+i);
     }
     this.setData({
       list: list
     })
  },
   /**
    * 目录导航的方法
    */
  carchClick(e){
    console.info('这是传递的目录值---', e.detail)
  },



  /**
   * 导航 （顶部或底部）
   */
  chooseOne(e) {
    let index = e.detail.index;  //当前选的下标
    this.setData({
      index: index
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