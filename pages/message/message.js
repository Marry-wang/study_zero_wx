// pages/message/message.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messageList: [
            {
                id: 1,
                title: '系统通知',
                content: '欢迎使用小程序，这里是消息中心',
                time: '10:30',
                unread: true
            },
            {
                id: 2,
                title: '活动通知',
                content: '新用户专享优惠活动开始啦！',
                time: '昨天',
                unread: true
            },
            {
                id: 3,
                title: '系统维护',
                content: '系统将于今晚22:00-23:00进行例行维护',
                time: '12-05',
                unread: false
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 页面加载时的逻辑
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
                selected: 1  // 消息页对应索引为 1
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

    handleMessageClick(e) {
        const { id } = e.currentTarget.dataset
        // 标记消息为已读
        const messageList = this.data.messageList.map(msg => {
            if (msg.id === id) {
                return { ...msg, unread: false }
            }
            return msg
        })
        
        this.setData({ messageList })

        // 跳转到消息详情页
        wx.navigateTo({
            url: `/pages/message-detail/message-detail?id=${id}`
        })
    }
})