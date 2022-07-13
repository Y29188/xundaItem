// pages/addAddress/addAddress.js
// import { areaList } from '@vant/area-data';
import {
  areaList
} from '../../miniprogram_npm/@vant/weapp/area';
import {
  addAddress,
  setAddress,
  updateAddress
} from '../api/data';
Page({

  /**
   * 页面的初始数据
   */
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
    isAdd: 0,
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.initForm()
  },

  onChange({
    detail
  }) {
    console.log(detail);
    // 需要手动对 checked 状态进行更新
    this.setData({
      status: detail
    });
  },


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
    console.log(this.data.address);
    // console.log(this.data.status);
    // 默认状态 0 1 
    let status = this.data.status ? 1 : 0
    console.log(status);
    let userInfo = wx.getStorageSync('userInfo')
    // 解构 
    let data = {
      ...this.data.address,
      status,
      memberId: userInfo.id,
      type: '1'
    }
    console.log(data);
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
      console.log(address);
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

      // console.log('11');
    } else {
      // console.log('222');
    }
  },

  // 保存地址
  setAddress() {
    let status = this.data.status ? 1 : 0
    // console.log(status);
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
    // console.log(data);
    // 更新地址 成功后跳转到selectAddress
    updateAddress(data).then(res => {
      console.log(res);
      wx.navigateTo({
        url: '../myAddress/myAddress',
      })
    })

  },


})