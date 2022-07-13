// pages/orderDetail/orderDetail.js
Page({
    data: {
        tel: "18688880130",
        orderNum: "20220509140712345678",
        cangKu: "新希望仓库",
        address: "深圳市龙华区龙华街道工业路壹城欢智中心C座2607室",
        state1: "待入仓",
        state: "已入库"
    },
    onShow() {
        let selectaddr = wx.getStorageSync('selectaddr')
        let country = wx.getStorageSync('country')
        this.setData({
            selectaddr,
            country
        })
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

})