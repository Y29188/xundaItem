import { setDefaultAddress,delAddress,getAddressList } from '../api/data';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    addressList: '',
    obj: [
    ]
  },

  // 点击编辑
  editclick(e){
    // console.log(e);
    let {item} = e.currentTarget.dataset;

    item = JSON.stringify(item)
    console.log(item);
    wx.navigateTo({
      url: `../addAddress/addAddress?address=${item}`,
    })
  },

  clickCity(e) {
    console.log(e);
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
    // 解构 item，index 
    let { item, index } = event.currentTarget.dataset;
    // 赋值 
    let addressList = this.data.addressList;
    // 循环数组下标item的状态
    addressList.forEach((item) => {
      item.status = false

    })
    // 取反addressList下标的状态
    addressList[index].status = !addressList[index].status;
    let id = addressList[index].id;
    // console.log(addressList[index]);
    setDefaultAddress(id).then(res => {

      // console.log(res);
    })
    this.setData({
      checked: event.detail,
      addressList,
    });
  },

  // 删除地址
  delAddress(e) {
    let { id } = e.currentTarget.dataset
    console.log(id);
    delAddress(id).then(res =>{
      this.initList()
      console.log(res);
    })
    
    this.setData({
      show:true,
      res,
      address
      
    })

    
  },

  clickAddress() {
    wx.navigateTo({
      url: '/pages/addAddress/addAddress',
    })
  },

  // 
  huixianAddress(e){
    console.log(e);
    let {item}= e.currentTarget.dataset;
    console.log(item);
    item = JSON.stringify(item)
    wx.navigateTo({
      url: `/pages/address/address?address=${item}`,
    })
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


})