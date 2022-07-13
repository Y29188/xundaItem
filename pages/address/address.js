// pages/fillAddress/fillAddress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cku: "中德仓库",
        tell: '18688880130',
        copy: '复制',
        address: '深圳市龙华区龙华街道工业路壹城环智中心C座2607室',
        obj: [{
                name: 'Name：',
                entry: 'Please fill in the  name',
                value: '',
                text: 'name'
            },
            {
                name: 'Phone：',
                entry: 'Please fill in the  phone',
                value: '',
                text: 'phone'
            },
            {
                name: 'Address：',
                entry: 'Please fill in  address',
                value: '',
                text: 'area'
            },
            {
                name: 'City：',
                entry: 'Please fill in the city',
                value: '',
                text: 'city'
            },
            {
                name: 'PostCode：',
                entry: 'Please fill  postcode',
                value: '',
                text: 'code'
            },

        ],
    },
    // 点击复制
    copy: function (e) {
        let item = e.currentTarget.dataset.item;
        console.log("复制", e, item);
        wx.setClipboardData({
            data: item,
            success: function (res) {
                showToastInfo({
                    title: '复制成功',
                    icon: "success"
                });
            }
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

        if (this.options?.address) {
            let address = JSON.parse(this.options.address);
            console.log(address, 'fff');
            let obj = this.data.obj;
            obj.forEach((item) => {

                item.value = address[item.text]

                // console.log(address[item.name]);
            })
            console.log(obj, 'ooo');
            this.setData({
                obj,
            })

        }

        console.log();

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