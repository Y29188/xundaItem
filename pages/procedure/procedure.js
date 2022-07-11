// pages/procedure/procedure.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        know: "已阅读",
        disabled: true,
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
        var that = this
        var num = 5;
        that.setData({
            know: "已阅读" + num + "s"
        })
        var timer = setInterval(function () {
            num--;
            if (num <= 0) {
                clearInterval(timer);
                that.setData({
                    know: '已阅读',
                    disabled: false
                })
            } else {
                that.setData({
                    know: "已阅读" + num + "s",
                    disabled: true
                })
            }
        }, 1000)
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

    }
})