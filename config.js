
docute.init({
    title: 'Nodejs 教程',
    repo: 'JakeLaoyu/Nodejs-tutorial',
    'edit-link': 'https://github.com/JakeLaoyu/Nodejs-tutorial',
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
            apiKey: 'de5f339e2322b4fba46c8d18533460a1',
            indexName: 'jakeyu',
            url: 'https://nodejs.jakeyu.top'
        }),
    ]
});
