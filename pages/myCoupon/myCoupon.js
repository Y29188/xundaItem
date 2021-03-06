Page({
    /**
     * 页面的初始数据
     */
    data: {
        showModal: false,
        effectTime:"2020.10.10 - 2020.11.11"
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

