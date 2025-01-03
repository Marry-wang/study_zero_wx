// app.js
App({
  onLaunch() {
    wx.nextTick(() => {
      this.checkLoginStatus()
    })
  },

  checkLoginStatus() {
    try {
      const token = wx.getStorageSync('token')
      if (!token) {
        setTimeout(() => {
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }, 100)
      }
    } catch (e) {
      console.error('检查登录状态失败:', e)
    }
  }
})
