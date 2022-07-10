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
                text: 'address'
            },
            {
                name: 'City：',
                entry: 'Please fill in the city',
                value: '',
                text: 'city'
            },
            {
                name: 'PostCode：',
                entry: 'Please fill in the postcode',
                value: '',
                text: 'postcode'
            },
        ],
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
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (this.options?.address) {
            let address = JSON.parse(this.options.address);
            // console.log(address);
            let obj = this.data.obj;
            obj.forEach((item) => {
                item.value = address[item.text];
            })
            this.setData({
                obj,
            })

        }

        console.log();

    },

    // 立即转运
    handleToTransfer() {
        let obj = {}
        // 循环对象
        for (let key in this.data.obj) {
            // 创建字段拿到value
            obj[this.data.obj[`${key}`].text] = this.data.obj[`${key}`].value
        }
        // 设置同步本地存储
        wx.setStorageSync('selectaddr',obj );
        wx.navigateTo({
          url: '/pages/procedure/procedure',
        })
    },

    // input框失去焦点事件
    handleInput(e) {
        // 取下标和获取input的value
        let indexipt = e.target.dataset.index
        let value = e.detail.value
        // console.log(value);
        // 循环数组
        this.data.obj.forEach((item, index) => {
            if (index == indexipt) {
                this.setData({
                    // 取出下标赋值
                    [`obj[${index}].value`]: value
                })
            }
        })
    },

    // exchangeBtn:function(){
    //     let value = this.data.obj.value;
    //     if(value == ''){
    //         wx:wx.showToast({
    //           title: '请输入对应的值',
    //         })
    //         return
    //     }
    // },
})