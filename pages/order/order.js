Page({
    data: {
        tabs: [{
                title: "全部"
            },
            {
                title: "待支付"
            },
            {
                title: "已支付"
            },
            {
                title: "已完成"
            }
        ],
        activeIndex: 0,
        text: "20220509140712345678",
        country: "美国",
        // waitRuCang: "待入仓",
        // confirmPack: "确认打包",
        // waitWrite:"确认填写",
        // waitPay:"待支付",
        // goPay:"去支付",
        // wareHouse:"已出仓",
        // logistics:"物流详情",
        // finished:"已完成",
        // pay:"已支付"

    },


    // 切换选项卡
    onChange(e) {
        // console.log(e.detail);
        let {
            index
        } = e.detail;
        // 将值赋值给activeIndex
        this.setData({
            activeIndex: index
        })
    },


    // 复制订单号
    copy: function (e) {
        let item = e.currentTarget.dataset.item;
        console.log('复制', e, item);
        wx.setClipboardData({
            data: item,
            success: function (res) {
                wx.showToast({
                    title: '复制成功',
                    icon: "success"
                })
            }
        })
    }
})