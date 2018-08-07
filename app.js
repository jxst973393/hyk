//app.js
const AV = require('./libs/av-weapp-min.js');
AV.init({
  appId: "TK0L23h1pBkt9gxlS8WFEzmo-gzGzoHsz",
  appKey: "iHiqSL8bjoox47qhQIAwpnHI",
  masterKey: "bzVTMmlDyQt4Mc6pAsef4v5B",
});
AV._config.useMasterKey = true;

App({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    gl2: [],
    Todo: [],
    _User: []
  },
  //   onLaunch: function () {
  //     AV._config.useMasterKey = true;

  //     // 展示本地存储能力
  //     var logs = wx.getStorageSync('logs') || []
  //     logs.unshift(Date.now())
  //     wx.setStorageSync('logs', logs)
  // var user = AV.User.current()
  //     // var roleAcl = new AV.ACL();
  //     // roleAcl.setPublicReadAccess(true);
  //     // roleAcl.setPublicWriteAccess(false);

  //     // // 当前用户是该角色的创建者，因此具备对该角色的写权限
  //     // // roleAcl.setWriteAccess(AV.User.current(), true);
  //     // roleAcl.setWriteAccess(user,true);
  //     // //新建角色
  //     // var administratorRole = new AV.Role('Administrator', roleAcl);
  //     // administratorRole.save().then(function (role) {
  //     //   var relation = administratorRole.getUsers();
  //     //   relation.add(AV.User.current());
  //     //   administratorRole.save();

  //     //   // 创建成功
  //     //   console.log(role,"role")
  //     // }).catch(function (error) {
  //     //   console.log(error);
  //     // });

  // // this.login();
  //     return AV.Promise.resolve(AV.User.current()).then(user =>
  //       user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null).then(user =>
  //         user ? user : AV.User.loginWithWeapp()
  //       ).then(user => {
  //         console.log(user)
  //         // 调用小程序 API，得到用户信息
  //         wx.getUserInfo({
  //           success: ({ userInfo }) => {
  //             // 更新当前用户的信息
  //             user.set(userInfo).save().then(user => {
  //               // 成功，此时可在控制台中看到更新后的用户信息
  //               this.globalData.user = user

  //               console.log(this.globalData.user)
  //             }).catch(console.error);
  //           },
  //           fail: function (res) {
  //             // console.log(res)
  //           }
  //         })
  //       }).catch(error => console.error(error))
  //   },
  //   getUserInfo: function (cb) {
  //     var that = this
  //     if (this.globalData.userInfo) {
  //       typeof cb == "function" && cb(this.globalData.userInfo)
  //     } else {
  //       //调用登录接口
  //       wx.login({
  //         success: function () {
  //           wx.getUserInfo({
  //             success: function (res) {
  //               that.globalData.userInfo = res.userInfo
  //               typeof cb == "function" && cb(that.globalData.userInfo)
  //             }
  //           })
  //         }
  //       })
  //     }

  //     // // 登录
  //     // wx.login({
  //     //   success: res => {
  //     //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     //   }
  //     // })
  //     // // 获取用户信息
  //     // wx.getSetting({
  //     //   success: res => {
  //     //     if (res.authSetting['scope.userInfo']) {
  //     //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //     //       wx.getUserInfo({
  //     //         success: res => {
  //     //           // 可以将 res 发送给后台解码出 unionId
  //     //           this.globalData.userInfo = res.userInfo

  //     //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     //           // 所以此处加入 callback 以防止这种情况
  //     //           if (this.userInfoReadyCallback) {
  //     //             this.userInfoReadyCallback(res)
  //     //           }
  //     //         }
  //     //       })
  //     //     }
  //     //   }
  //     // })
  //   },

  //   // login: function () {
  //   //   return AV.Promise.resolve(AV.User.current()).then(user =>
  //   //     user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null).then(user =>
  //   //       user ? user : AV.User.loginWithWeapp()
  //   //     ).then(user => {
  //   //       console.log(user)
  //   //       // 调用小程序 API，得到用户信息
  //   //       wx.getUserInfo({
  //   //         success: ({ userInfo }) => {
  //   //           // 更新当前用户的信息
  //   //           user.set(userInfo).save().then(user => {
  //   //             // 成功，此时可在控制台中看到更新后的用户信息
  //   //             this.globalData.user = user

  //   //             console.log(this.globalData.user)
  //   //           }).catch(console.error);
  //   //         },
  //   //         fail: function (res) {
  //   //           // console.log(res)
  //   //         }
  //   //       })
  //   //     }).catch(error => console.error(error))
  //   // },
  //   // getUserInfo: function (cb) {
  //   //   var that = this
  //   //   if (this.globalData.userInfo) {
  //   //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   //   } else {
  //   //     //调用登录接口
  //   //     wx.login({
  //   //       success: function () {
  //   //         wx.getUserInfo({
  //   //           success: function (res) {
  //   //             that.globalData.userInfo = res.userInfo
  //   //             typeof cb == "function" && cb(that.globalData.userInfo)
  //   //           }
  //   //         })
  //   //       }
  //   //     })
  //   //   }
  //   // },
  onLaunch: function () {

    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    AV._config.useMasterKey = true;

    AV.Promise.resolve(AV.User.current()).then(user =>
      user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null).then(user =>
        user ? user : AV.User.loginWithWeapp()
      ).then(user => {
        console.log(user)
        // 调用小程序 API，得到用户信息
        wx.getUserInfo({
          success: ({ userInfo }) => {
            // 更新当前用户的信息
            user.set(userInfo).save().then(user => {
              // 成功，此时可在控制台中看到更新后的用户信息
              this.globalData.user = user
              console.log(this.globalData.user)
            }).catch(console.error);
          },
          fail: function (res) {
            console.log(res)
          }
        })
      }).catch(error => console.error(error))
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    param: null,
    param1: null,
    shouye: null,
    param2: null,
    param3: null,
    param4: null,
    param5: null,
    param6: null,
    param7: null,
    user: null,
    userInfo: null,
    param8: null,
    param9: null,
    param10: null,
    param11: null,
    param12: null,
  }
})