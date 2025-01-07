Component({
  data: {
    selected: 0,
    color: "#999999",
    selectedColor: "#07c160",
    list: [
      {
        pagePath: "/pages/home/home",
        text: "首页",
        icon: "icon-home"
      },
      {
        pagePath: "/pages/message/message",
        text: "消息",
        icon: "icon-message"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的",
        icon: "icon-mine"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected: data.index
      })
      wx.switchTab({
        url
      })
    }
  }
}) 