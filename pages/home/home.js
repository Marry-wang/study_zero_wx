Page({
  data: {
    userInfo: {},
    menuList: [
      {
        // icon: '/assets/icons/order.png',
        text: '我的订单',
        url: '/pages/order/order'
      },
      {
        // icon: '/assets/icons/collect.png',
        text: '我的收藏',
        url: '/pages/collect/collect'
      },
      {
        // icon: '/assets/icons/address.png',
        text: '收货地址',
        url: '/pages/address/address'
      },
      {
        // icon: '/assets/icons/setting.png',
        text: '设置',
        url: '/pages/setting/setting'
      }
    ]
  },

  onLoad() {
    // 使用 nextTick 确保页面准备就绪
    wx.nextTick(() => {
      this.initPage()
    })
  },

  initPage() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.getUserInfo()
        resolve()
      }, 200)
    })
  },

  getUserInfo() {
    try {
      const userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.setData({ userInfo })
      }
    } catch (e) {
      console.error('获取用户信息失败:', e)
    }
  },

  // 编辑资料
  handleEditProfile() {
    wx.navigateTo({
      url: '/pages/profile/edit'
    })
  },

  // 退出登录
  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          try {
            wx.clearStorageSync()
            wx.reLaunch({
              url: '/pages/index/index'
            })
          } catch (e) {
            console.error('退出登录失败:', e)
            wx.showToast({
              title: '退出失败，请重试',
              icon: 'none'
            })
          }
        }
      }
    })
  },

  // 菜单项点击
  handleMenuClick(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },

  // 下拉刷新
  async onPullDownRefresh() {
    try {
      await this.initPage()
    } finally {
      wx.stopPullDownRefresh()
    }
  }
}) 