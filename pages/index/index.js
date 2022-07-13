// index.js
// 获取应用实例
import {
    getBanner
} from '../../api/data'
const app = getApp()
Page({
    data: {
        country: '美国',
        showModal: false,
        list: ["普通货物", "电子产品", "液体粉末", "内地EMS", "广东EMS"],
        flag: 0,
        banner: [],
    },
    selectCountry: function () {
        wx.navigateTo({
            url: '/pages/nationalArea/nationalArea',
        })
    },
    // 立即转运切换
    colorChange(e) {
        let flag = e.currentTarget.dataset.index;
        // console.log(e);
        this.setData({
            flag
        })
        wx.setStorageSync('flag', flag)
    },

    onLoad: function () {},
    /**
     * 弹窗
     */
    onShow() {
        getBanner().then(res => {
            this.setData({
                banner: res.data.data
            })
        })
        // 选择国家跳转的参数
        if (this.options?.country) {
            this.setData({
                country: this.options.country
            })
        }
    },
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