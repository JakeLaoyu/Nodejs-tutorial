
docute.init({
    title: 'Nodejs 教程',
    repo: 'JakeLaoyu/Nodejs-tutorial',
    'edit-link': 'https://github.com/JakeLaoyu/Nodejs-tutorial/tree/master',
    nav: {
        default: [
            {
                title: '主页', path: '/'
            },
            {
                title: '安装配置', path: '/ins-con'
            },
            {
                title: '关于', path: '/about'
            },
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'Nodejs教程',
            tags: ['zh-Hans'],
            url: 'http://nodejs.jakeyu.top/'
        }),
    ]
});
