// pages/supportDetail/supportDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showModal: false,
        checked2: false,
        checked1: false,
        input: null,
        choseCheck: false,
        obj: [{
                info: "国际快递由于多国调度，存在一定比例丢失的情况!如丢失包裹,购买丢失险可获得全额赔付赔付(最高5000元)!!",
                type: "丢失险（保价3%）",
                check: false,
                insurance: "保险费：¥",
                num: 3,
                price: 0
            },
            {
                info: "电子产品等容易被税的高客单价产品建议购买关税保险!英国关税起征点为0.01英镑!综合关税=货值x增值税率+(货值+运费+货值x产品税率)x20%+清关杂费。",
                type: "关说险（保价2%）",
                check: false,
                insurance: "保险费：¥",
                num: 2,
                price: 0
            }
        ]

    },
    input(e) {
        let value = e.detail.value;
        let obj = this.data.obj;
        console.log(obj);
        obj.forEach((item) => {
            item.price = (value * item.num / 100)
        })
        this.setData({
            obj
        })
        console.log(e.detail.value);
    },

    onChange1(e) {
        // 复选框绑定的下标
        let index = e.currentTarget.dataset.index;
        let obj = this.data.obj;
        console.log(obj);
        console.log(index);
        // 取反 
        obj[index].check = !obj[index].check;
        // 重新赋值 响应
        this.setData({
            obj
        })
    },

    // input失去焦点 3%
    loseBlur: function (e) {
        this.setData({
            value: e.detail.value
        })
    },

    // 下一步
    next: function () {
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
            url: '/pages/payDetail/payDetail',
        })
    },

    // 对话框确认按钮点击事件
    onConfirm: function () {
        this.hideModal();
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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