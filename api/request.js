// 请求实例
function request(url, option) {
    return new Promise((resolve, reject) => {
        wx.request({
            success(res) {
                resolve(res);
            },
            fail(err) {
                reject(err)
            },
            ...option,
            url,
        })
    })


};


export default request;