Page({
    data: {
        timer: '', // 定时器名字
        time: '3'
    },

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

   
})