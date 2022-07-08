// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // indexList: ["#", "A", "B", "C", "D"],
        indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        obj: [{
                name: '阿尔巴尼亚',
                country: 'Albania'
            },
            {
                name: '比利时',
                country: 'Belgium'
            },
            {
                name: '哥伦比亚',
                country: 'Columbia'
            },
            {
                name: '阿根廷',
                country: 'Argentina'
            },
            {
                name: '阿鲁巴岛',
                country: 'Aruba'
            },
            {
                name: '中国（香港，澳门，台湾）',
                country: 'China'
            },
            {

                name: '美国',
                country: 'United States'
            },

            {
                name: '巴基斯坦',
                country: 'Pakistan'
            },
            {
                name: '英国',
                country: 'United Kingdom'
            },
        ],
        addressList: [],
    },

    clickCountry(e) {
        console.log('带入参数');
        let obj = e.currentTarget.dataset.item.name;
        wx.reLaunch({
            url: `/pages/index/index?country=${obj}&a=8`,
        })

        console.log(e.currentTarget.dataset.item.name);
    },
    // 过滤
    initList(e) {
        let obj = this.data.obj;
        let list = {}
        obj.forEach(item => {
            if (!list[item.country[0]]) {
                list[item.country[0]] = [item]
            } else {
                list[item.country[0]].push[item]
            }
        });
        this.setData({
            obj: list
        })
        console.log(list);
    },

    onLoad: function (options) {

    },
    onShow() {
        this.initList()
    }

})