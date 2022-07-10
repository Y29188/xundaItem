Page({

    /**
     * 页面的初始数据
     */
    data: {
        agree: "同意本条款",
        name:"Yuu",
        hideFlag: true, // true-隐藏 false-显示
        animationData: {},
        coutTime: 5,
        ban: true,
        reject: true,
        timer: "",
        check: false,
        tel:"18688880130",
        orderNum: "20220509140712345678",
        address:"MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA",
        transport: "138.00",
        attach: "38.00",
        lose: "0.00",
        customs: "28.00",
        money: "8",
        reduce: "8",
        subtotal: "28.00",
        tatl:"138.00"
    },
    // 点击选项
    getOption: function (e) {
        var that = this;
        that.setData({
            value: e.currentTarget.dataset.value,
            hideFlag: true
        })
    },

    // 显示遮罩层
    showModal: function () {
        var that = this;
        let countTime = that.data.coutTime
        that.setData({
            hideFlag: false,
            agree: "请阅读" + countTime + "s",
            timer: setInterval(function () {
                countTime--;
                that.setData({
                    agree: "请阅读" + countTime + "s",
                });
                if (countTime == 0) {
                    // 清除定时器
                    clearInterval(that.data.timer);
                    that.setData({
                        reject: false,
                        agree: "同意本条款",

                    })
                }
            }, 1000)
        })

        // 创建动画实例
        var animation = wx.createAnimation({
            duration: 400, // 动画的持续时间
            timingFunction: 'ease', // 动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
        })
        this.animation = animation; // 将animation变量赋值给当前动画
        var time1 = setTimeout(function () {
            that.slideIn(); // 调用动画--滑入
            clearTimeout(time1);
            time1 = null;
        }, 100)
    },

    // 底部按钮禁用
    checkTap: function () {
        if (!this.data.check) {
            this.data.check = true;
            this.setData({
                ban: false
            })
        } else {
            this.data.check = false;
            this.setData({
                ban: true
            })
        }
    },

    // 隐藏遮罩层
    hideModal: function () {
        var that = this;
        that.setData({
            check: true,
            ban: false
        })
        var animation = wx.createAnimation({
            duration: 400, // 动画的持续时间 默认400ms
            timingFunction: 'ease', // 动画的效果 默认值是linear
        })
        this.animation = animation
        that.slideDown(); // 调用动画--滑出
        var time1 = setTimeout(function () {
            that.setData({
                hideFlag: true
            })
            clearTimeout(time1);
            time1 = null;
        }, 220) // 先执行下滑动画，再隐藏模块

    },
    // 动画 -- 滑入
    slideIn: function () {
        this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
        this.setData({
            //动画实例的export方法导出动画数据传递给组件的animation属性
            animationData: this.animation.export()
        })
    },
    // 动画 -- 滑出
    slideDown: function () {
        this.animation.translateY(300).step()
        this.setData({
            animationData: this.animation.export(),
        })
    },

    // 立即支付
    payRight: function () {
        wx.navigateTo({
            url: '/pages/payFinish/payFinish',
        })
    },

})