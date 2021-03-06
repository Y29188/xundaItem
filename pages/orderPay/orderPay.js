// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cangKu: "新希望仓库",
        address: "深圳市龙华区龙华街道工业路壹城欢智中心C座2607室",
        tel: "18688880130",
        orderNum: "20220509140712345678",
        showModal: false,
        weight: "1.28kg",
        state1: "带入仓",
        state: "已入库",
        size: "123759874",
        fare: "138.00",
        attach: "0.00",
        weight: "5.6 kg",
        cate: "普通货物",
        imgList: [
            "/assets/image/img1.png",
            "/assets/image/img1.png",
            "/assets/image/img1.png"
        ]
    },
    onShow() {
        let selectaddr = wx.getStorageSync('selectaddr')
        let country = wx.getStorageSync('country')
        this.setData({
            selectaddr,
            country
        })
    },
    // 预览图片，放大预览
    preview(event) {
        console.log(event.currentTarget.dataset.src)
        let currentUrl = event.target.dataset.src
        wx.previewImage({
            current: currentUrl, // 当前显示图片的http链接
            urls: this.data.imgList // 需要预览的图片http链接列表
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

    // 支付选项 
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

    // 弹窗
    showDialogBtn: function () {
        this.setData({
            showModal: true
        })
    },
    
    // 弹出框蒙层截断touchmove事件
    preventTouchMove: function () {},

    // 隐藏模态对话框
    hideModal: function () {
        this.setData({
            showModal: false
        });
    },
    // 对话框取消按钮点击事件
    onCancel: function () {
        this.hideModal();
        wx.navigateTo({
            url: '/pages/contactSer/contactSer',
        })

    },
    // 对话框确认按钮点击事件
    onConfirm: function () {
        this.hideModal();
        wx.navigateTo({
            url: '/pages/supportDetail/supportDetail',
        })
    },
})