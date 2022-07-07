// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indexList: ["#", "A", "B", "C", "D"],
        index: 0,
        more: [{
                name: '美国',
                english: 'United States'
            },
            {
                name: '中国（香港，澳门，台湾）',
                english: 'China'
            },
            {
                name: '巴基斯坦',
                english: 'Pakistan'
            },
            {
                name: '英国',
                english: 'United Kingdom'
            },
        ],
        Acountry: [{
                name: '阿尔巴尼亚',
                english: 'Albania'
            },
            {
                name: '阿尔及利亚',
                english: 'Algeria'
            },
            {
                name: '阿富汗',
                english: 'Afghanistan'
            },
            {
                name: '阿根廷',
                english: 'Argentina'
            },
            {
                name: '阿鲁巴岛',
                english: 'Aruba'
            },

        ],
        Bcountry: [{
                name: '白俄罗斯',
                english: 'Belarus'
            },
            {
                name: '保加利亚',
                english: 'Bulgaria'
            },
            {
                name: '比利时',
                english: 'Belgium'
            },
        ],
        Ccountry: [{
                name: '古巴共和国',
                english: 'Cuban '
            },
            {
                name: '哥伦比亚',
                english: 'Columbia'
            },
            {
                name: '渥太华',
                english: 'Ottawa'
            },
        ],
        Dcountry: [{
                name: '古巴共和国',
                english: 'Cuban '
            },
            {
                name: '哥伦比亚',
                english: 'Columbia'
            },
            {
                name: '渥太华',
                english: 'Ottawa'
            },
        ],
    },

    onLoad: function (options) {
        
    },

})