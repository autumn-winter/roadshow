module.exports = {
  //真实开发的话,如果你的项目存放在公司域名二级路径下 只需要将 /production-sub-path/改为 /公司二级路径/就可以了
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'red': '#3983FF',
            'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
}
