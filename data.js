// data.js
window.portfolioData = {
    hero: {
        subtitle: "> ./run_profile.tz",
        name: "TERRY ZHANG",
        role: "CREATOR / DEV",
        badges: ["SYS: Python", "UI: Web Front-end", "OPTICS: Photography", "HARDWARE: Lego MOC"]
    },
    about: {
        title: "> SYS.INFO",
        paragraphs: [
            "我出生于 2011 年的夏天，目前在上海就读初三。",
            "平日里我有不少热爱的事物：沉迷编程、喜欢用乐高自由创作 MOC 作品，也常常仰望星空探索天文。除此之外，我还是不折不扣的航空与铁道爱好者。对我来说，技术从不是单纯敲打键盘的重复动作，而是把脑海里天马行空的想法，一步步落地、变成现实的过程。",
            "闲暇时间我会接触音乐（小号十级，曾任校管乐团团长），或者折腾最新的数码科技。我相信机器的理智与艺术的感性是可以产生共振的。"
        ],
        stats: [
            { number: "3+", label: "Coding Languages" },
            { number: "30+", label: "Github Repos" },
            { number: "10+", label: "MOCs" },
            { number: "25+", label: "Photographic works" }
        ],
        techStackTitle: "ROOT@TECH_STACK:~#",
        techStack: [
            { icon: "fab fa-python", text: "Python / Backend & Pi" },
            { icon: "fab fa-js", text: "JavaScript / ES6" },
            { icon: "fab fa-html5", text: "HTML5 / CSS3" },
            { icon: "fas fa-cube", text: "Lego Studio / 3D Mod" },
            { icon: "fas fa-terminal", text: "Terminal / Bash" }
        ]
    },
    portfolio: {
        title: "> ARCHIVE_DATA",
        filters: [
            { id: "all", label: "[ ALL ]", active: true },
            { id: "tech", label: "[ CODE ]", active: false },
            { id: "sightseeing", label: "[ PHOTOS ]", active: false },
            { id: "other", label: "[ CRAFTS & MOCs ]", active: false }
        ],
        projects: [
            {
                category: "tech",
                img: "https://ik.imagekit.io/terryzhang/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-12-14%20211827.png",
                title: "Typace Framework",
                date: "DATE: 2025.04",
                desc: "自主开发的一个博客框架，目前正在完善开源计划中。",
                link: "https://typace.mrzxr.com",
                linkText: "EXTERNAL_LINK"
            },
            {
                category: "tech",
                img: "https://ik.imagekit.io/terryzhang/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-01-13%20213636.png?updatedAt=1737440050555",
                title: "Personal Node",
                date: "DATE: 2025.01",
                desc: "基于 hexo-theme-redefine 搭建的个人技术博客。",
                link: "https://www.mrzxr.com",
                linkText: "EXTERNAL_LINK"
            },
            {
                category: "other",
                img: "https://ik.imagekit.io/terryzhang/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250121155005.jpg?updatedAt=1737445877405",
                title: "Lego Train P42DC",
                date: "DATE: 2024.08",
                desc: "乐高moc美国国铁 P42DC 实体化。",
                link: "https://www.bilibili.com/video/BV1vdHAeUE8f",
                linkText: "PLAY_VIDEO"
            },
            {
                category: "sightseeing",
                img: "https://ik.imagekit.io/terryzhang/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250121154512.jpg?updatedAt=1737445559321",
                title: "Cedar at Museum",
                date: "LOC: BEIJING | 2024.07",
                desc: "中国国家博物馆前雪松",
                link: null, 
                linkText: ""
            }
        ]
    },
    moments: {
        title: "> PERSONAL LOGS",
        items: [
            {
                date: "2026.05.16",
                content: "英语听说测试顺利结束！",
                location: "Shanghai",
                images: []
            },
            {
                date: "2026.05.10",
                content: "今天重构了整个作品集的代码，改成了朋克风",
                location: "Shanghai",
                images: []
            },
            {
                date: "2025.08.20",
                content: "美国国铁p42dc内燃机车实体化moc",
                location: "Shanghai",
                images: [
                    "https://ik.imagekit.io/terryzhang/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250121155005.jpg?updatedAt=1737445877405"
                ] 
            },
            {
                date: "2024.07.20",
                content: "夏天的北京真的很热。",
                location: "Beijing",
                images: [
                    "https://ik.imagekit.io/terryzhang/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250121154512.jpg?updatedAt=1737445559321"
                ]
            }
        ]
    },
    contact: {
        title: "> PING_REQUEST",
        items: [
            {
                isCopy: true,
                copyData: "zhang@mrzxr.com",
                link: "mailto:zhang@mrzxr.com",
                icon: "fas fa-envelope",
                title: "EMAIL",
                desc: "zhang@mrzxr.com",
                actionText: "[ CLICK_TO_COPY ]"
            },
            {
                isCopy: false,
                link: "https://github.com/terryzhangxr",
                icon: "fab fa-github",
                title: "GITHUB",
                desc: "@terryzhangxr",
                actionText: "[ EXTERNAL_LINK ]"
            },
            {
                isCopy: false,
                link: "https://www.mrzxr.com",
                icon: "fas fa-terminal",
                title: "BLOG",
                desc: "www.mrzxr.com",
                actionText: "[ EXTERNAL_LINK ]"
            },
            {
                isCopy: false,
                link: "https://space.bilibili.com/3546622533306643",
                icon: "fa-brands fa-bilibili",
                title: "BILIBILI",
                desc: "UID: 3546622533306643",
                actionText: "[ EXTERNAL_LINK ]"
            }
        ]
    }
};
