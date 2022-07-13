// pages/fillAddress/fillAddress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cku: "迅达仓库",
        tell: '18688880130',
        copy: '复制',
        address: '深圳市龙华区龙华街道工业路壹城环智中心C座2607室',
        obj: [{
                name: 'Name：',
                entry: "Please fill in the recipient's name",
                value: '',
                text: 'name'
            },
            {
                name: 'Phone：',
                entry: "Please fill in the recipient's phone",
                value: '',
                text: 'phone'
            },
            {
                name: 'Address：',
                entry: 'Please fill in the address',
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
                entry: 'Please fill the postcode',
                value: '',
                text: 'code'
            },

        ],
    },
    // 复制电话
    copy: function (e) {
        let item = e.currentTarget.dataset.item;
        console.log("复制", e, item);
        wx.setClipboardData({
            data: item,
            success: function (res) {}
        });
    },

    onLoad(options) {

    },

    onShow() {
        if (this.options?.address) {
            let address = JSON.parse(this.options.address);
            console.log(address, 'fff');
            let obj = this.data.obj;
            obj.forEach((item) => {
                item.value = address[item.text]
            })
            console.log(obj, 'ooo');
            this.setData({
                obj,
            })
        }
    },

})