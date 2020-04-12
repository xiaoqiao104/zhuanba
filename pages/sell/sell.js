//var app = getApp()拍照实验
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tempFilePaths: ''实验
    tempFilePaths: '',
    currentIndex: 0,
    navList: ['女装', '男装', '医药', '百货', '美妆', '鞋靴', '手机', '箱包', '饰品', '数码', '运动', '图书', '礼品', '钟表'],
    informationList: ['商品名字：', '商品原价：', '商品现价：']
  },
  //实验
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  nav: function (e) {
    var that = this;
    that.setData({
      currentIndex: e.detail.current
    })
  },
  activeNav: function (e) {
    var that = this;
    that.setData({
      currentIndex: e.target.dataset.index
    })
  },

  //实验结束


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