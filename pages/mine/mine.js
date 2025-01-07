// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        statsData: [
            { num: '0', label: '收藏' },
            { num: '0', label: '关注' },
            { num: '0', label: '足迹' }
        ],
        menuGroups: [
            {
                title: '我的服务',
                items: [
                    {
                        icon: 'icon-order',
                        text: '我的订单',
                        url: '/pages/order/order',
                        value: '全部订单'
                    },
                    {
                        icon: 'icon-wallet',
                        text: '我的钱包',
                        url: '/pages/wallet/wallet',
                        value: '¥0.00'
                    }
                ]
            },
            {
                title: '其他设置',
                items: [
                    {
                        icon: 'icon-setting',
                        text: '系统设置',
                        url: '/pages/setting/setting'
                    }
                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getUserInfo()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2  // 我的页对应索引为 2
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    getUserInfo() {
        const userInfo = wx.getStorageSync('userInfo')
        if (userInfo) {
            this.setData({ userInfo })
        }
    },

    handleEditProfile() {
        wx.navigateTo({
            url: '/pages/profile/edit'
        })
    },

    handleMenuClick(e) {
        const { url } = e.currentTarget.dataset
        wx.navigateTo({ url })
    },

    handleLogout() {
        wx.showModal({
            title: '提示',
            content: '确定要退出登录吗？',
            success: (res) => {
                if (res.confirm) {
                    wx.clearStorageSync()
                    wx.reLaunch({
                        url: '/pages/index/index'
                    })
                }
            }
        })
    }
})