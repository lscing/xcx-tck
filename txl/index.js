
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选择字母视图滚动的位置id
    selected: 'A',
    scrollIntoView: 'A',
    // 导航字母
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'],
    group: [
      { name: "A",
        user: [
          { cont: "啊啊啊啊", url: "", state: "0"},
          { cont: "爱爱爱爱a", url: "/pages/core/index/index",state:"1"}
        ]
      },
      {
        name: "B", user: [
          { cont: "拜拜拜拜", url: "https://www.baidu.com/", state: "0" },
          { cont: "不不不不不不", url: "/pages/core/index/index" },
          { cont: "拜拜拜拜", url: "https://www.baidu.com/", state: "1" },
          { cont: "不不不不不不", url: "/pages/core/index/index" },
          { cont: "拜拜拜拜", url: "https://www.baidu.com/" },
          { cont: "不不不不不不", url: "/pages/core/index/index" }
        ] },
      { name: "C", user: "踩踩踩踩踩踩" },
      { name: "D", user: "地对地导弹" },
      { name: "E", user: "噩噩噩噩噩" },
      { name: "F", user: "烦烦烦方法" },
      { name: "K", user: "卡卡卡卡" },
      { name: "L", user: "啦啦啦" },
      { name: "M", user: "密密麻麻" },
      { name: "Q", user: "去去去去去" },
      { name: "W", user: "哇哇哇哇哇" },
      { name: "Y", user: "也一样一样" },
      { name: "Z", user: "重中之重" },
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tabLetter(e) {
    console.log(e)
    const index = e.currentTarget.dataset.index;
    this.setData({
      selected: index,
      scrollIntoView: index
    })
  },
  //点击联系人弹框
  open: function () {
    wx.showActionSheet({
      itemList: ['删除'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  },
  //点击联系人跳转
  clickUser(e) {
    console.log(e);
    const url = e.currentTarget.dataset.user;
    console.log(url);
    wx.navigateTo({
      url: url
    })
  },
  checkAdult(age) {
    return age >= 18;
  },
  //搜索框
  wxSearchInput(e) {
    console.log(e);
    let value = e.detail.value;
    let dateAll = this.data.group;
    var agl = dateAll.indexOf(value)
    // let gl = dateAll.filter(checkAdult);
    console.log(value);
    console.log(dateAll);
    console.log(agl);
    this.setData({
      groups: value
    })
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