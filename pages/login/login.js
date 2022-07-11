const app = getApp()

Page({
    data: {

    },
    bindGetLogin() {
        wx.showModal({
            title: '登录授权',
            content: '测试登录',
            success(res) {
                if (res.confirm) {
                    wx.getUserProfile({
                        desc: 'desc',
                        success(res) {
                            // res.userInfo.nickName
                            // 解构
                            let {
                                avatarUrl,
                                nickName
                            } = res.userInfo;
                            console.log(avatarUrl, nickName);
                            wx.login({
                                success(res) {
                                    //  console.log(res);

                                    let {
                                        code
                                    } = res;
                                    //  console.log(code);
                                    wx.request({
                                        url: 'http://103.24.177.147:8084/api/member/v2/login',
                                        method: 'POST',
                                        data: {
                                            code,
                                            nickName,
                                            avatarUrl
                                        },
                                        success(res) {
                                            console.log(res);
                                        }
                                    })
                                }
                            })
                            // console.log(res.userInfo);
                        }
                    })
                }
            }
        })
    },
    onLoad() {},

})