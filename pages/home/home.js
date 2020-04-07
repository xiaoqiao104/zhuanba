// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    navList: ['女装', '男装', '医药', '百货', '美妆', '鞋靴', '手机', '箱包', '饰品', '数码', '运动', '图书', '礼品', '钟表'],
    // 点击首页导航按钮
    nav: function (e) {
      var that = this;
      that.setData({
        currentIndex: e.detail.current
      })
    },
    activeNav: function (e) {
      var that = this;
      if (this.data.currentIndex === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentIndex: e.target.dataset.current
        })
      }
    },
    product_img: [
      '../../image/demon4.jpg ', '../../image/demon5.jpg', '../../image/demon6.jpg', '../../image/demon7.jpg', '../../image/demon4.jpg ', '../../image/demon5.jpg', '../../image/demon6.jpg', '../../image/demon7.jpg'
    ],
    title: ['价格：50', '价格：60', '价格：70', '价格：80']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})