// pages/school/index.js
var sliderWidth = 110; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["班级", "团队","分组"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 12,
    checkboxItems: [
      { name: '三年级一班', value: '1', checked: true},
      { name: '三年级2班', value: '2' },
      { name: '三年级3班', value: '3' },
    ],
    selectedAllStatus: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  },
  checkboxChangeqx: function (e) {
    var selectedAllStatus = this.data.selectedAllStatus;
    selectedAllStatus = !selectedAllStatus;
    var qx = this.data.checkboxItems;
    console.log(selectedAllStatus);
    if (selectedAllStatus){
      for (var i = 0; i<qx.length;i++) {
        qx[i].checked = true;
      }
    }else{
      for (var i = 0; i < qx.length; i++) {
        qx[i].checked = false;
      }
    }
    console.log(qx);
    this.setData({
      checkboxItems: qx,
      selectedAllStatus: selectedAllStatus
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    console.log(e);
    
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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
  onShareAppMessage: function (res) {
  },
})