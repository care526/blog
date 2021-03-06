const Utils = require('./utilsForConfig')

const PartConfigs = [
    require('./modules/a.qianduan.config'),
    require('./modules/b.houduan.config'),
    require('./modules/c.computer.base.config'),
    require('./modules/d.linux.config')
]

const NavConfigs = [
    { text: 'Home', link: '/' },
    { text: 'MyPage', link: '/customizePages/home' },
    { text: '前端', items: [
        { text: '基础', items: [
            { text: 'HTML', link: '/customizePages/navigate#前端,HTML' },
            { text: 'SVG', link: '/customizePages/navigate#前端,SVG' },
            { text: 'CSS', link: '/customizePages/navigate#前端,CSS' },
            { text: 'JS', link: '/customizePages/navigate#前端,JS' },
            { text: 'TS', link: '/customizePages/navigate#前端,TS' },
            { text: 'Node', link: '/customizePages/navigate#前端,Node' },
            { text: 'Package', link: '/customizePages/navigate#前端,Package' },
            { text: 'Vscode', link: '/customizePages/navigate#前端,Vscode' },
        ] },
        { text: '框架', items: [
            { text: 'React', link: '/customizePages/navigate#前端,React' },
            { text: 'Vue', link: '/customizePages/navigate#前端,Vue' },
            { text: 'Angular', link: '/customizePages/navigate#前端,Angular' },
        ] },
        { text: '工程化', items: [
            { text: 'Webpack', link: '/customizePages/navigate#前端,Webpack' },
            { text: 'Rollup', link: '/customizePages/navigate#前端,Rollup' },
            { text: '优化', link: '/customizePages/navigate#前端,优化' },
        ] },
        { text: '其他', items: [
            { text: '浏览器', link: '/customizePages/navigate#前端,浏览器' },
            { text: '用户体验', link: '/customizePages/navigate#前端,用户体验' },
            { text: 'HTTP', link: '/customizePages/navigate#前端,HTTP' },
        ] }
    ] },
    { text: '后端', items: [
        { text: '数据库', link: '/customizePages/navigate#后端,数据库' },
        { text: 'Docker', link: '/customizePages/navigate#后端,Docker' },
        { text: 'Go', link: '/customizePages/navigate#后端,Go' },
        { text: 'Java', link: '/customizePages/navigate#后端,Java' },
        { text: 'Python', link: '/customizePages/navigate#后端,Python' },
        { text: 'Rust', link: '/customizePages/navigate#后端,Rust' },
    ] },
    { text: '编程思想', link: '/customizePages/navigate#编程思想' },
    { text: 'Linux', items: [
        { text: '所有', link: '/customizePages/navigate#Linux,所有' },
        { text: '软件', link: '/customizePages/navigate#Linux,软件' },
        { text: 'Shell', link: '/customizePages/navigate#Linux,Shell' },
    ] },

    // ...PartConfigs.map(Utils.transfrom)
]

module.exports = NavConfigs

// module.exports = [
//     { text: 'Home', link: '/' },
//     {
//         text: '前端', 
//         items: [
//             {   
//                 text: '基础', 
//                 items: [
//                     { text: 'HTML', link: '/a-qianduan-html/all' },
//                     { text: 'SVG', link: '/a-qianduan-svg/all' },
//                     { text: 'CSS', link: '/a-qianduan-css/qa' },
//                     { text: 'JS', link: '/a-qianduan-js/Array' },
//                     { text: 'Ts', link: '/a-qianduan-ts/class' },
//                     { text: 'Node', link: '/a-qianduan-node/fs' },
//                 ]
//             },
//             {
//                 text: '框架', 
//                 items: [
//                     { text: 'Vue', link: '/a-qianduan-vue/Vue-cli' },
//                     { text: 'React', link: '/a-qianduan-react/Class' },
//                 ]
//             },
//             {
//                 text: '工程化', 
//                 items: [
//                     { text: 'Webpack', link: '/a-qianduan-webpack/entry' },
//                     // { text: '脚手架', link: '/webpack/entry' },
//                 ]
//             },
//             {
//                 text: '其他', 
//                 items: [
//                     { text: '浏览器', link: '/a-qianduan-browser/save' },
//                     { text: '包', link: '/a-qianduan-package/1-npm' },
//                     { text: 'vscode', link: '/a-qianduan-vscode/plugins' },
//                     { text: '性能优化', link: '/a-qianduan-xingNengYouHua/dev' },
//                 ]
//             },
//             // {
//             //     text: '路由', 
//             //     items: [
//             //         { text: 'Vue-router', link: '/Vue/Vue-cli' },
//             //         { text: 'React-router', link: '/React/Class' },
//             //     ]
//             // },
//             // {
//             //     text: '状态管理', 
//             //     items: [
//             //         { text: 'Vuex', link: '/Vue/Vue-cli' },
//             //         { text: 'Redux', link: '/React/Class' },
//             //         { text: 'Mbox', link: '/React/Class' },
//             //     ]
//             // },
//         ]
//     },
//     {
//         text: '后端', 
//         items: [
//             {
//                 text: '语言',
//                 items: [
//                     { text: 'GO', link: '/b-houduan-go/1-base-data' },
//                     { text: 'JAVA', link: '/b-houduan-java/Java' },
//                     { text: 'Python', link: '/b-houduan-python/def' },
//                     { text: 'Rust', link: '/b-houduan-rust/bianliang' },
//                 ]
//             },
//             {
//                 text: '运维',
//                 items: [
//                     { text: 'Docker', link: '/b-houduan-docker/docker' },
//                 ]
//             },
//             {
//                 text: '数据库',
//                 items: [
//                     { text: 'Mysql', link: '/b-houduan-database/mysql' },
//                     { text: 'Redis', link: '/b-houduan-database/redis' },
//                     // { text: 'Mongdb', link: '/Python/def' },
//                 ]
//             }
//         ]
//     },
//     {
//         text: '计算机基础', 
//         items: [
//             { text: 'HTTP', link: '/c-computer-base-http/http' },
//             { text: '编程思想', link: '/c-computer-base-thought/designMode' },
//         ]
//     },
//     // {
//     //     text: '产品', 
//     //     items: [
//     //         { text: '案例', link: '/production/example/baiduyun' },
//     //         { text: '理论', link: '/production/theory/a' },
//     //     ]
//     // },
//     {
//         text: 'Linux', 
//         items: [
//             { text: '命令', link: '/d-linux-mingLing/mingLing' },
//             { text: 'Shell', link: '/d-linux-shell/myShell' },
//             { text: '软件', link: '/d-linux-software/git' },
//         ]
//     },
//     // {
//     //     text: '通用', 
//     //     items: [
//     //         { text: 'Git', link: '/Git/Git' },
//     //     ]
//     // },
//     // {
//     //     text: '管理', 
//     //     items: [
//     //         { text: '自我管理', link: '/Git/Git' },
//     //         { text: '团队管理', link: '/Git/Git' },
//     //     ]
//     // },
//     // {
//     //     text: '编程其他', 
//     //     items: [
//     //         { text: '编程思想', link: '/programmingThought/function' },
//     //         { text: '数据结构', link: '/programmingThought/function' },
//     //     ]
//     // },
//     // {
//     //     text: '书籍',
//     //     items: [
//     //         {
//     //             text: '技术', 
//     //             items: [
//     //                 { text: 'Webpack', link: '/' },
//     //             ]
//     //         },
//     //         {
//     //             text: '非技术', 
//     //             items: [
//     //                 { text: 'Webpack', link: '/' },
//     //             ]
//     //         }
//     //     ] 
//     // },
//     // {
//     //     text: '影视',
//     //     items: [
//     //         {
//     //             text: '电视剧', 
//     //             items: [
//     //                 { text: 'Webpack', link: '/' },
//     //             ]
//     //         },
//     //         {
//     //             text: '综艺', 
//     //             items: [
//     //                 { text: 'Webpack', link: '/' },
//     //             ]
//     //         },
//     //         {
//     //             text: '纪录片', 
//     //             items: [
//     //                 { text: 'Webpack', link: '/' },
//     //             ]
//     //         }
//     //     ] 
//     // },
//     // {
//     //     text: '杂记',
//     //     items: [
//     //         { text: '2020', link: '/2020/5' },
//     //     ]
//     // },
//     // { text: '经济', link: '/' },
//     // { text: '心理', link: '/' },
//     // { text: '历史', link: '/' },
// ]