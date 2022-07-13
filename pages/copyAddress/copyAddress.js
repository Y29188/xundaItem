Page({
    data: {
        cangKu: "迅达仓库",
        address: "深圳市龙华区龙华街道工业",
        address1: "路壹城环智中心C座2607室",
        tel: "18688880130",
        zipCode: "518000"
    },

    // 复制地址
    copyAddress: function (e) {
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