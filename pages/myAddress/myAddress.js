import {
    setDefaultAddress,
    delAddress,
    getAddressList
} from '../../api/data';
Page({
    data: {
        addressList: '',
        obj: []
    },

    // 点击编辑地址
    editclick(e) {
        let {
            item
        } = e.currentTarget.dataset;
        item = JSON.stringify(item)
        console.log(item);
        wx.navigateTo({
            url: `../addAddress/addAddress?address=${item}`,
        })
    },

    // 过滤
    initList(e) {
        let obj = this.data.obj;
        getAddressList().then(res => {
            this.setData({
                addressList: res.data.data
            })
            console.log(res.data.data);
        })
    },

    onShow() {
        this.initList()
    },

    // 单选复选
    onChange(event) {
        let {
            item,
            index
        } = event.currentTarget.dataset;
        let addressList = this.data.addressList;
        // 循环数组下标item的状态
        addressList.forEach((item) => {
            item.status = false
        })
        // 取反addressList下标的状态
        addressList[index].status = !addressList[index].status;
        let id = addressList[index].id;
        setDefaultAddress(id).then(res => {
            console.log(res);
        })
        this.setData({
            checked: event.detail,
            addressList,
        });
    },

    // 删除地址
    delAddress(e) {
        let {
            id
        } = e.currentTarget.dataset
        console.log(id);
        wx.showToast({
            title: '删除成功',
            icon: "success"
        })
        delAddress(id).then(res => {
            this.initList()
        })
        this.setData({
            res,
            address
        })
    },

    clickAddress() {
        wx.navigateTo({
            url: '/pages/addAddress/addAddress',
        })
    },

    // 回显地址
    huixianAddress(e) {
        let {
            item
        } = e.currentTarget.dataset;
        console.log(item);
        item = JSON.stringify(item)
        wx.navigateTo({
            url: `/pages/address/address?address=${item}`,
        })
    },
})