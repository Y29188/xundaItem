// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tel: "18688880130",
        orderNum: "20220509140712345678",
        showModal: false,
        conLists: [], // 内容标题（可以添加或者删除
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

    // // + 补充快递单号
    // replenishBtn(e) {
    //     wx.showModal({
    //         title: '是否增加快递单号',
    //         content: '增加快递单后，发往转运中心的快递个数+1,是否要继续？',
    //         success: function (res) {
    //             if (res.confirm) {
    //                 console.log('用户点击确定')
    //                 wx.showToast({
    //                     title: '确认增加',
    //                     duration: 1000,
    //                 })
    //             } else {
    //                 console.log('用户点击取消')
    //             }
    //         }
    //     })
    // },


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

    hideModal: function () {
        this.setData({
            showModal: false
        });
    },
    /**
     * 对话框取消按钮点击事件
     */
    onCancel: function () {
        this.hideModal();
    },
    /**
     * 对话框确认按钮点击事件
     */
    onConfirm: function () {
        this.hideModal();
        // 点击添加按钮，就往数组里添加一条空数据
        var _list = this.data.conLists;
        _list.push("")
        this.setData({
            conLists: _list
        });
        wx.showToast({
            title: '增加成功',
            icon: "success"
        })
    },

    //  添加内容
    add(e) {
        this.setData({
            showModal: true
        })
    },

    // 删除内容
    del(e) {
        var idx = e.currentTarget.dataset.index;
        var _list = this.data.conLists;
        console.log(idx)
        for (let i = 0; i < _list.length; i++) {
            if (idx == i) {
                _list.splice(idx, 1)
            }
        }
        this.setData({
            conLists: _list
        })
    },

    onShow() {

    },

})