// pages/selectAddress/selectAddress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        obj: [{
                checked: true,
                name: "XiaoZ",
                phone: "179****9697",
                address: "MEGASYSTEMS INC 85705 USA ",
                city: "DRAGRAM",
                postcode: "510080"
            },
            {
                name: "Yuu",
                phone: "148****0320",
                address: "British Museum London England",
                city: "London",
                postcode: "233100"
            }
        ]
    },

    click(e) {
        wx.navigateTo({
            url: `/pages/address/address?address=${JSON.stringify(e.currentTarget.dataset.item) }`,
        })
        console.log(e.currentTarget.dataset.item);
    },


    // 过滤
    initList(e) {
        let obj = this.data.obj;
        let list = {}
        obj.forEach(item => {
            if (!list[item.city[0]]) {
                list[item.city[0]] = [item];
            } else {
                list[item.city[0]].push[item];
            }
        });
        this.setData({
            obj: list
        })
        console.log(list);
    },
    onShow() {
        this.initList()
    },
    // 单选复选
    onChange(event) {
        this.setData({
            checked: event.detail,
        });
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