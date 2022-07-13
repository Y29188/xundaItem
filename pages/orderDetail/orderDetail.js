// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tel: "18688880130",
        orderNum: "20220509140712345678",
        address: "深圳市龙华区龙华街道工业路壹城欢智中心C座2607室",
        cangku: "新希望仓库",
        country: "",
        orderTime: "2022-05-09 14:07:12",
        showModal: false,
        showModal2: false,
        conLists: [], // 内容标题（可以添加或者删除)
        ban: false,
        inputNum: "",
        waitWrite: "待填写",
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
            showModal: false,
            showModal2: false
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

    // 添加内容
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

    // 快递个数input框失去焦点
    loseDopt: function (e) {
        // 判断input必须是number
        let reg = /^[0-9]*$/;
        let value = e.detail.value;
        if (!reg.test(value)) {
            wx.showToast({
                title: '请输入数字',
                icon: "error"
            })
            return;
        }
        // console.log(e.detail.value);
        if (reg.test(value)) {
            let list = this.data.conLists;
            for (let i = 0; i < value; i++) {
                list.push({
                    value: "",
                    disabled: false
                });
            }
            this.setData({
                ban: true,
                conLists: list
            });
            wx.setStorage({
                key: "value",
                data: list
            })
        }

    },


    // 动态添加input框失去焦点弹窗
    showdialog: function (e) {
        // console.log(e);
        // 先取出下标
        let indexipt = e.target.dataset.index;
        // console.log(indexipt);
        // 循环数组
        this.data.conLists.forEach((item, index) => {
            if (index == indexipt) {
                this.setData({
                    // 设置哪个下标就给哪个input框禁用
                    [`conLists[${index}].value`]: e.detail.value,
                    [`conLists[${index}].disabled`]: true,
                    // 设置弹窗提示
                    showModal2: true
                });

            }
        })
        console.log(this.data.conLists);
    },


    // 失去焦点弹出框蒙层截断touchmove事件
    preventTouchMove2: function () {},


    // 对话框取消按钮点击事件
    onCancel2: function () {
        this.hideModal();

    },

    // 失去焦点弹窗点击确认
    onConfirm2: function () {
        this.hideModal();
    },

    onLoad: function (options) {

    },
    onShow() {
        let selectaddr = wx.getStorageSync('selectaddr')
        let country = wx.getStorageSync('country')
        let flag = wx.getStorageSync('flag')
        this.setData({
            selectaddr,
            country,
            flag
        })
    }

})