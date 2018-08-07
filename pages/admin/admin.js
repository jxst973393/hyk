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

    var cccc = e.detail.value.ccc
    AV._config.useMasterKey = true;

    var query = new AV.Query('_User');
    query.equalTo('shouji', cccc)
    query.find().then(function (results) {
      console.log(results['0'].id)
      // results.that.data
      var userobject = results['0'].id

      var textareaObject = e.detail.value.textarea;
      var user = new AV.Query('_User');
      user.get(userobject).then(function (user) {
        // AV.Cloud.useMasterKey();
        let opt = { useMasterKey: true };
        var phonenumber = user.get('jifen', opt);
        var ttt = Number(textareaObject) + Number(phonenumber);
        // console.log(opt,"opt");

        user.set('jifen', Number(ttt));
        user.save(opt);
      });
    })
    wx.navigateBack({
      delta: 1
    })

    // console.log(qqq)


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
    //   _User: getApp().globalData.param
    // });
    // console.log(getApp().globalData.param)

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