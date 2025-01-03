// index.js
Page({
  data: {
    username: '',
    password: ''
  },

  // 输入框事件处理
  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    })
  },

  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录处理
  handleLogin() {
    const { username, password } = this.data
    
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '登录中...'
    })

    // 模拟登录验证
    setTimeout(() => {
      wx.hideLoading()
      
      if (username === 'admin' && password === 'admin') {
        // 模拟用户信息
        const mockUserInfo = {
          nickName: '管理员',
          avatarUrl: '/assets/default-avatar.png',
          userId: 'admin_001'
        }
        
        // 保存登录状态和用户信息
        wx.setStorageSync('token', 'mock_token_' + Date.now())
        wx.setStorageSync('userInfo', mockUserInfo)
        
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1500
        })

        // 延迟跳转到首页
        setTimeout(() => {
          wx.reLaunch({
            url: '/pages/home/home'
          })
        }, 1500)
      } else {
        wx.showToast({
          title: '用户名或密码错误',
          icon: 'none'
        })
      }
    }, 1000) // 模拟网络延迟
  },

  // 第三方登录处理
  handleWechatLogin() {
    wx.showLoading({
      title: '正在登录...'
    })
    
    wx.login({
      success: (res) => {
        if (res.code) {
          // 这里应该把 code 发送到后端换取用户信息
          console.log('微信登录code:', res.code)
          
          // 假设登录成功，保存用户信息
          const mockUserInfo = {
            nickName: '微信用户',
            avatarUrl: '/assets/default-avatar.png',
            userId: 'wx_' + Date.now()
          }
          wx.setStorageSync('userInfo', mockUserInfo)
          wx.setStorageSync('token', 'wx_token_' + Date.now())
          
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 1500
          })

          // 延迟跳转到首页
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/home/home'
            })
          }, 1500)
        } else {
          wx.showToast({
            title: '微信登录失败',
            icon: 'none'
          })
        }
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  }
})
