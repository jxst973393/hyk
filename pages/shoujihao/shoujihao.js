// pages/admin/admin.js
const app = getApp()
const AV = require('../../libs/av-weapp-min.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    gl2: [],
    Todo: [],
    _User: []
  },

  bindFormSubmit: function (e) {
    AV._config.useMasterKey = true;

    var thisid = getApp().globalData.param1.id
    console.log(thisid)

    console.log(e.detail.value.textarea)
    var that = this
    // var user = AV.User.current();
    var userObject = AV.Object.createWithoutData('_User', thisid);
    var textareaObject = e.detail.value.textarea;
    // console.log(user.id)
    // console.log(thisid.id,"111")
    var user = new AV.Query('_User');
    user.get(thisid).then(function (user) {
      var phonenumber = user.get('shouji');
      user.set('shouji', textareaObject);
      user.save();

      wx.navigateBack({
        delta: 1
      });
    });

    // var gl = AV.Object.createWithoutData('gl2', '5b62ce8f2f301e003987b02d');
    // var query = new AV.Query('gl2');
    // query.get('5b62ce8f2f301e003987b02d').then(function (gl2) {
    //   var content = gl2.get('ccc');
    //   var ccc = gl2.id;
    //   var ttt = Number(textareaObject) + Number(content);
    //   var yyy = parseInt(textareaObject);
    //   var uuu = parseInt(content);
    //   console.log(content);
    //   console.log(ttt);
    //   gl.set('ccc', yyy + uuu);
    //   gl.save();
    // });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   _User: getApp().globalData.param1
    // });
    // console.log(getApp().globalData.param1.id)
    // console.log(getApp().globalData.param1)
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