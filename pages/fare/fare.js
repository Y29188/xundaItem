// pages/fare/fare.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        check: false,
        checked: true,
        goods: "货物渠道",
        goodsList: [{
            name: "普通货物 ",
            firstWeight: 59,
            continueWeight: 39
        }, {
            name: "电子产品",
            firstWeight: 69,
            continueWeight: 49
        }, {
            name: "液体粉末",
            firstWeight: 79,
            continueWeight: 59
        }, {
            name: "广东ESM",
            firstWeight: 128,
            continueWeight: 49
        }, {
            name: "内地ESM",
            firstWeight: 128,
            continueWeight: 35
        }, ],
        value: '',
        total: "0.00"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    // 货物类型绑定重量事件
    handleWeight() {
        // 循环数组
        this.data.goodsList.forEach((item) => {
            if (item.name == this.data.goods) {
                // 首重
                let newFirstWeight = item.firstWeight;
                // 续重
                let newContinueWeight = item.continueWeight;
                // 斤数
                let value = this.data.value;
                this.setData({
                    // 第一斤是首重 第二次算续重 要先剪掉一斤首重
                    total: newFirstWeight + (value - 1) * newContinueWeight
                })
            }
        })
    },
    // 选择货物渠道绑定的事件
    handleSelectGoods() {
        let that = this
        // 货物类型分类
        wx.showActionSheet({
            itemList: ['普通货物', '电子产品', '液体粉末', '内地ESM', '广东ESM'],
            success(res) {
                let obj = {
                    0: '货物渠道',
                    1: "电子产品",
                    2: "液体粉末",
                    3: "内地ESM",
                    4: "广东ESM"
                }
                that.setData({
                    // 取下标
                    goods: obj[res.tapIndex],
                })
            },
        })
    }
})