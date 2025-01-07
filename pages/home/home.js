Page({
  data: {
    userInfo: {},
    quickActions: [
      {
        icon: 'icon-scan',
        text: '扫一扫',
        type: 'scan'
      },
      {
        icon: 'icon-payment',
        text: '付款',
        type: 'payment'
      },
      {
        icon: 'icon-card',
        text: '卡包',
        type: 'card'
      },
      {
        icon: 'icon-service',
        text: '客服',
        type: 'service'
      }
    ],
    features: [
      {
        icon: 'icon-order',
        text: '订单',
        url: '/pages/order/order'
      },
      {
        icon: 'icon-coupon',
        text: '优惠券',
        url: '/pages/coupon/coupon'
      },
      {
        icon: 'icon-collect',
        text: '收藏',
        url: '/pages/collect/collect'
      },
      {
        icon: 'icon-address',
        text: '地址',
        url: '/pages/address/address'
      },
      {
        icon: 'icon-history',
        text: '足迹',
        url: '/pages/history/history'
      },
      {
        icon: 'icon-help',
        text: '帮助',
        url: '/pages/help/help'
      }
    ],
    recommends: [
      {
        id: 1,
        title: '新人专享礼包',
        desc: '100元优惠券等你领取',
        tag: '新人专享'
      },
      {
        id: 2,
        title: '邀请好友',
        desc: '得50元现金奖励',
        tag: '活动'
      }
    ]
  },

  onLoad() {
    this.getUserInfo()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  getUserInfo() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({ userInfo })
    }
  },

  handleQuickAction(e) {
    const { type } = e.currentTarget.dataset
    switch (type) {
      case 'scan':
        wx.scanCode({
          success: (res) => {
            console.log('扫码结果：', res)
          }
        })
        break
      case 'payment':
        wx.navigateTo({ url: '/pages/payment/payment' })
        break
      case 'card':
        wx.navigateTo({ url: '/pages/card/card' })
        break
      case 'service':
        wx.navigateTo({ url: '/pages/service/service' })
        break
    }
  },

  handleFeatureClick(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },

  handleRecommendClick(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/activity/detail?id=${id}`
    })
  }
}) 