module.exports = {
  // 页面标题
  title: "draken-design",
  // 网页描述
  description: "",
  head: [
    // 页面icon
    ["link", { rel: "icon", href: "/icon.png" }],
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true,
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: "最后更新时间",
    // 所有页面自动生成侧边栏
    sidebar: "auto",
    // 仓库地址
    repo: "https://github.com/draken-design/draken-docs",
    // 仓库链接label
    repoLabel: "Github",
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: "编辑此页",
    // 导航
    nav: [
      {
        text: "mini-vue",
        items: [
          {
            text: "mini-vue",
            link: "/components/mini-vue",
          },
          {
            text: "mini-react",
            link: "/components/mini-react",
          },
        ],
      },
      { text: "基础配置功能", link: "/common/" },
    ],
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        "@vuepress": "../images/vuepress",
        "@vue": "../images/vue",
      },
    },
  },
};
