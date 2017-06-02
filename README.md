# vue-template

## 配置
* 用scss的同学要下载 "node-sass","sass-loader";
* 解决打包时图片加载不出的问题
    <!-- 1 -->
    webpack.prod.conf.js P40行将 css/去掉
    new ExtractTextPlugin({
      filename: utils.assetsPath('[name].[contenthash].css')
    }),
    <!-- 2 -->
    config/index P9-10 修改成以下这样
    assetsSubDirectory: '',
    assetsPublicPath: './',
   * 存在每次打包时放最外层的"static/"的文件都要复制一层到 "dist/" 目录下。


## 放置
### src
* src/api           =>      api（创建）=> index.js 放请求的地方
* components        =>      组件 / 部件  用于创建常用组件（收集）
  button/ => ls button.vue index.js  // 组件类
  style/  放样式的
  merge.scss       // 合并的样式
  main.js          // 通用的js
* view（创建）      =>      正式页面所在的位置
* static（创建）    =>      静态文件放置
    ls => &/img &/scss &/js
* 

* App.vue 加入页面切换效果

## 注意
* scss 文件引用写在 style 里面 
  用 @import '地址' 引用。
  （原因：postcss功能 只作用于 .vue 后缀文件的样式中）
