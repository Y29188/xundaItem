// index.js
// 获取应用实例
const app = getApp()
Page({
    data: {
        country: '美国',
        showModal: false,
        list: ["普通货物", "电子产品", "液体粉末", "内地EMS", "广东EMS"],
        flag: 0,
        indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    colorChange(e) {
        let flag = e.currentTarget.dataset.index;
        this.setData({
            flag
        })
        console.log(e);
    },
    clickCountry(e){
        let country = e.currentTarget.dataset.index;
        this.setData({
            country
        })
    },

    onLoad: function () {},
    /**
     * 弹窗
     */
    showDialogBtn: function () {
        this.setData({
            showModal: true
        })
    },
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove: function () {},
    /**
     * 隐藏模态对话框
     */
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
        wx.navigateTo({
            url: "/pages/address/address"
        })
        this.hideModal();
    }
})