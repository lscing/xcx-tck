// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["班级", "团队"],
    activeIndex: 0,
    grids: [0, 1, 2, 3, 4, 5],
    ds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17],
    showView:false,
    downAni:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },

  tabClickQxup: function(e) {
    console.log(e);
    var types = e.currentTarget.dataset.hef;
    if (types) {
      var states = false;
      var downAni = true;
    } else {
      var states = true;
      var downAni = false;
    }
    this.setData({
      showView: states,
      downAni : downAni
    });
  },
  tabClickQxdown: function (e) {
    console.log(e);
    
    var types = e.currentTarget.dataset.hef;
    if (types) {
      var states = false;
      var downAni = true;
    } else {
      var states = true;
      var downAni = false;
    }
    this.setData({
      downAni: downAni
    });
    var qthis = this;
    setTimeout(function () {
      qthis.setData({
        showView: states,
      });
    }, 250);
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