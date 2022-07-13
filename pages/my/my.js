Page({
    data: {
        userInfo: "",
    },

    onLoad(options) {},

    onShow() {
        // 个人信息
        let userInfo = wx.getStorageSync('userInfo')
        this.setData({
            userInfo
        });

    },

    getUserProfile(e) {
        wx.getUserProfile({
            desc: '登录',
            success(res) {
                let {
                    avatarUrl,
                    nickName
                } = res.userInfo;
                console.log(avatarUrl, nickName);
                wx.login({
                    success(res) {
                        let {
                            code
                        } = res;
                        wx.request({
                            url: 'http://103.24.177.147:8084/api/member/v2/login',
                            method: "POST",
                            // 个人信息
                            data: {
                                code,
                                nickName,
                                avatarUrl
                            },
                            success(res) {
                                console.log(res);
                                let data = res.data.data
                                // 本地存储
                                wx.setStorageSync('userInfo', data)
                                wx.showToast({
                                    title: '登录成功',
                                })
                            }
                        })
                    }
                })
            }
        })
    },
})