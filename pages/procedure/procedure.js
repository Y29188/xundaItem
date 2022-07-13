Page({
    data: {
        know: "已阅读",
        disabled: true,
    },

    onLoad(options) {

    },

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

    
})