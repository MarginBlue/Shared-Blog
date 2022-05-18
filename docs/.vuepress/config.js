module.exports = {
    title: '...',
    description: '...',
    theme: 'reco',// 主题
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新', // string | boolean
        subSidebar: 'auto',// 目录结构
        nav: [
            {text: '首页', link: '/'},
            {
                text: '包木的 前端 博客',
                items: [
                    {text: 'Github', link: ''},
                    {text: '掘金', link: ''}
                ]
            }
        ],
        sidebar: [
            {
                title: '前端学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "学前必读", path: "/"}
                ]
            },
            {
                title: "HTML",
                path: '/handbook/web',
                collapsable: false, // 不折叠
                children: [
                    {title: "web", path: "/handbook/web"},
                ],
            },
            {
                title: "JavaScript",
                path: '/handbook/JS',
                collapsable: false, // 不折叠
                children: [
                    {title: "JavaScript", path: "/handbook/JavaScript/JS"},
                    // {title: "原型链", path: "/handbook/JavaScript/"},
                ],
            },
            {
                title: "ES6",
                path: '/handbook/ES6',
                collapsable: false, // 不折叠
                children: [
                    {title: "ES6", path: "/handbook/ES6"},
                ],
            },
            {
                title: "Vue",
                path: '/handbook/vue/vue',
                collapsable: false, // 不折叠
                children: [
                    {title: "Vue简介", path: "/handbook/vue/vue"},
                    {title: "Vue上手", path: "/handbook/vue/vue"},
                ],
            },
            {
                title: "vueRouter",
                path: '/handbook/vueRouter',
                collapsable: false, // 不折叠
                children: [
                    {title: "vueRouter", path: "/handbook/vueRouter"},
                ],
            },
            {
                title: "vuex",
                path: '/handbook/vuex',
                collapsable: false, // 不折叠
                children: [
                    {title: "vuex", path: "/handbook/vuex"},
                ],
            },
            {
                title: "webpack",
                path: '/handbook/webpack',
                collapsable: false, // 不折叠
                children: [
                    {title: "webpack", path: "/handbook/webpack"},
                ],
            }
        ]
    }
}