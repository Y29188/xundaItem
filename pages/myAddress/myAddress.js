// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tel: "186****0130",
        tel1: "186****4135",
        orderNum: "20220509140712345678",

        obj: [{
                checked: true,
                name: "小泽",
                tel: "179****9697",
                address: "广东省广州市白云区三元里抗英斗争纪念公园 ",
                city: "广州市",
                postCode: "510080"
            },
            {
                name: "小眠",
                tel: "148****0320",
                address: "安徽省滁州市凤阳县",
                city: "滁州市",
                postCode: "233100"
            }
        ]
    },

    // 复制电话号码
    copyTel: function (e) {
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
    },

    // + 补充快递单号
    replenishBtn() {
        wx.showModal({
            title: '是否增加快递单号',
            content: '增加快递单后，发往转运中心的快递个数+1,是否要继续？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.showToast({
                        title: '确认增加',
                        duration: 1000,
                    })
                } else {
                    console.log('用户点击取消')
                }
            }
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
    },

    /* 取消订单 */
    cancelOrder() {
        wx.showModal({
            title: '是否取消订单',
            content: '取消订单后，订单将不能进行后续操作，是否要继续？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.showToast({
                        title: '取消订单成功',
                        duration: 1000,
                    })

                } else {
                    console.log('用户点击取消')
                }

            }
        })
    },


})