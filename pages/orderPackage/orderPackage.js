// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tel: "18688880130",
        showModal: false,
        address: "深圳市龙华区龙华街道工业路壹城欢智中心C座2607室",
        address2: "MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA"
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

    // 确认打包
    mustPack() {
        wx.showModal({
            title: '是否确认打包所有的快递包裹',
            content: '确认后,订单进入捡货状态,快递包裹将会进行打包称重,是否要继续？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.showToast({
                        title: '确认成功',
                        duration: 1000,
                    });
                    wx.navigateTo({
                        url: '/pages/orderCheck/orderCheck',
                    })
                } else {
                    console.log('用户点击取消')
                }

            }
        })
    },
})