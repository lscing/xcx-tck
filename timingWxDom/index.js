// pages/sign/timing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lis:"<周五>",
    leaveData:[
      { id: "aaa",shqw:0,isFold:"true",content:"每周四,周五,周六的09:54发布签到,签到时间:09:55-09:56asdsadsadds到,签到时间:09:55-09:56asdsadsadds"},
      { id: "bbb",shqw:0,isFold: "true",content: "每周四,周五,周六的09:54发布签到,签到时间:09:55-09:56" },
      { id: "ccc", shqw:0,isFold: "true",content: "每周四,周五,周六的09:54发布签到,签到时间:09:55-09:56asdsadsadds到,签到时间:09:55-09:56asdsadsadds" },
    ],
    isOne: false,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    
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
    var _this = this;
    var data = this.data.leaveData;
    typeof this.data.leaveData[1].shqw
    console.log(data)
    var query = wx.createSelectorQuery()
    //这里用let,不用var循环的原因是底下res会产生闭包
    for (let i = 0; i < data.length; i++) {
      query.select('#' + data[i].id).boundingClientRect()
      query.exec(function (res) {
        console.log(i)
        console.log(res[i].height)
        if (res[i].height < 39) {
          console.log("hei", res[i].height + "false")
          data[i].shqw = 1 ;
          _this.setData({
            leaveData: data
          });
        }
      })
    }
   
  },
  flodFn: function (e) {
    var query = wx.createSelectorQuery()




    var data = this.data.leaveData;
    var fid = e.currentTarget.dataset.id;
    //这里实现了jq点击事件所谓的this
    //通过遍历数组取得与当前id所相同的那一列数组
    //然后给那一列数组的某个属性赋值
    for (var i = 0; i < data.length; i++) {
      if (fid == data[i].id){
        //console.log("i",i)
        data[i].isFold = !data[i].isFold;
      }
    }

    this.setData({
      leaveData: data
    });
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
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
  
  },
  addTiming: function () {
      wx.navigateTo({
        url: "/pages/sign/createTiming/index"
      })
    
  },
})