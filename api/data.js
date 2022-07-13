import instance from './request.js'

// 获取轮播图
export function getBanner() {
    return instance(`http://103.24.177.147:8084/api/content/carousel/images`, {
        method: 'get',
    })
}

// 获取地址列表
export function getAddressList(id) {
  let obj = wx.getStorageSync('userInfo')
  return instance(`http://103.24.177.147:8084/api/member/address/list?memberId=${obj.id}&type=1`,{
    method:'get',

  })
  
}

// 添加地址接口
export function addAddress(data) {
    return instance(`http://103.24.177.147:8084/api/member/address/save`, {
        method: 'post',
        data
    })
}

// 默认地址
export function setDefaultAddress(id) {
    return instance(`http://103.24.177.147:8084/api/member/address/setDefault`, {
        method: 'post',
        data: {
            id
        }
    })
}

// 更新地址
export function updateAddress(data) {
    return instance(`http://103.24.177.147:8084/api/member/address/update`, {
        method: 'post',
        data,
    })
}

// 删除地址
export function delAddress(id) {
    return instance(`http://103.24.177.147:8084/api/member/address/delete`, {
        method: 'post',
        data: {
            id
        }
    })
}