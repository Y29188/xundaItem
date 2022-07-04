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
        text: "20220509140712345678"
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