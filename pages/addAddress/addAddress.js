import {
    areaList
} from '../../miniprogram_npm/@vant/weapp/area';
import {
    addAddress,
    setAddress,
    updateAddress
} from '../../api/data';
Page({
    data: {
        status: false,
        areaList,
        address: {
            name: '',
            phone: '',
            area: '',
            city: '',
            code: '',

        },
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
        isAdd: 0,
    },

    onShow() {
        this.initForm()
    },

    // switch开关事件
    onChange({
        detail
    }) {
        // 对 checked 状态进行更新
        this.setData({
            status: detail
        });
    },

    // 失去焦点事件
    blur(e) {
        let {
            text
        } = e.currentTarget.dataset.item
        let {
            value
        } = e.detail;
        let address = this.data.address;
        address[text] = value;
        this.setData({
            value
        })
        console.log(value, text);
    },

    // 添加地址
    addAddress() {
        // 默认状态 0 1 
        let status = this.data.status ? 1 : 0
        let userInfo = wx.getStorageSync('userInfo')
        // 解构 
        let data = {
            ...this.data.address,
            status,
            memberId: userInfo.id,
            type: '1'
        }
        addAddress(data).then(res => {
            console.log(res);
        })
        wx.navigateTo({
            url: '/pages/myAddress/myAddress',
        })
    },

    // 添加地址 重新调用初始化
    initForm() {
        if (this.options?.address) {
            let address = this.options.address;
            address = JSON.parse(address);
            let obj = this.data.obj;
            obj.forEach(item => {
                item.value = address[item.text];
            })
            this.setData({
                obj,
                isAdd: 1,
                id: address.id,
                address
            })
        } else {}
    },

    // 保存地址
    setAddress() {
        let status = this.data.status ? 1 : 0
        // 个人信息
        let userInfo = wx.getStorageSync('userInfo')
        let address = this.data.address;
        let id = this.data.id;
        let data = {
            ...address,
            id,
            status,
            memberId: userInfo.id,
            type: '1'
        }

        // 更新地址 成功后跳转到myAddress
        updateAddress(data).then(res => {
            console.log(res);
            wx.navigateTo({
                url: '../myAddress/myAddress',
            })
        })
    },
})