//index.js
//获取应用实例
const app = getApp()
const AV = require('../../libs/av-weapp-min.js');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    gl2: [],
    Todo: [],
    _User: []
  },
  bindViewTap1: function (e) {
    var that = this
    var user = AV.User.current();

    wx.navigateTo({
      url: '../admin/admin',
    })
  },

  bangdingshoujihao: function (e) {
    var that = this
    var user = AV.User.current();
    var userObject = AV.Object.createWithoutData('_User', AV.User.current().id);
    // console.log(userObject)
    app.globalData.param1 = userObject
    wx.navigateTo({
      url: '../shoujihao/shoujihao',
    })
  },

  //事件处理函数
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    // console.log(e.detail.value)
  },

  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  onLoad: function () {
    // var that = this
    var user = AV.User.current();
    var userObject = AV.Object.createWithoutData('_User', AV.User.current().id);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  // onLoad: function () {
  //   var that = this
  //   var user = AV.User.current();
  //   var userObject = AV.Object.createWithoutData('_User', user.id);
  //   // console.log(userObject)
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }

  // },

  onReady: function () {
    var user = AV.User.current();

    var userObject = AV.Object.createWithoutData('_User', user.id);
    console.log(userObject.id)

    new AV.Query('_User')
      .descending('updtedAt')
      // .find()
      .get(userObject.id)
      .then(_User => this.setData({ _User }))
      .catch(console.error);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onPullDownRefresh: function () {
    wx.showLoading({
      title: "刷新中",
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    var user = AV.User.current();

    var userObject = AV.Object.createWithoutData('_User', user.id);
    console.log(userObject.id)
    new AV.Query('_User')
      .descending('updtedAt')
      // .find()
      .get(userObject.id)
      .then(_User => this.setData({ _User }))
      .catch(console.error);
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function () {
    var title3 = '洛阳微时光会员卡'
    return {
      title: title3,
      path: 'pages/index/index'
    }
  }

})
