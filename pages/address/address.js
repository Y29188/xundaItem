// pages/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        depot: "迅达仓库",
        tel: "18688880130",
        copy: "复制",
        address: "深圳市龙华区龙华街道工业路壹城欢智中心C座2607室",
        obj: [{
                name: 'Name：',
                tip: "Please fill in the recipient's name",
                value: '',
                text: 'name'
            },
            {
                name: 'Phone：',
                tip: "Please fill in the recipient's Phone",
                value: '',
                text: 'tell'
            },
            {
                name: 'Address：',
                tip: 'Please fill in the address',
                value: '',
                text: 'address'
            },
            {
                name: 'City：',
                tip: 'Please fill in the city',
                value: '',
                text: 'city'
            },
            {
                name: 'PostCode：',
                tip: 'Please fill in the postcode',
                value: '',
                text: 'postCode'
            },

        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    // 复制电话号码
    copy: function (e) {
        let item = e.currentTarget.dataset.item;
        console.log("复制", e, item);
        wx.setClipboardData({
            data: item,
            success: function (res) {
                wx.showToast({
                    title: '复制成功',
                    icon: "success"
                })
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (this.options?.address) {
            let address = JSON.parse(this.options.address);
            console.log(address);
            let obj = this.data.obj;
            obj.forEach((item) => {
                item.value = address[item.text]
            });
            this.setData({
                obj,
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})