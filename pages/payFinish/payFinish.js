// pages/payFinish/payFinish.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        timer: '', // 定时器名字
        time: '3'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    // 自动跳转页面
    onLoad() {
        let that = this;
        let countTime = that.data.time;
        that.setData({
            timer: setInterval(function () {
                countTime--;
                that.setData({
                    time: countTime
                });
                if (countTime == 0) {
                    // 清除定时器
                    clearInterval(that.data.timer);
                    // 使用延时器让页面跳转
                    setTimeout(() => {
                        wx.reLaunch({
                            url: '/pages/order/order'
                        })
                    }, 800)
                }
            }, 1000)
        })
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