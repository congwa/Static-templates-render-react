# 用react作为模版进行渲染

react ssr的一种应用 

实现目的：熟悉一下ssr

vite版本-main分支
babel版本- babel分支

## 过程

1. 使用react静态渲染api（ReactDOMServer.renderToString）把react转化为字符串
2. 使用vite来进行： 为了在开发过程中享受热更新
3. 借助vite的ssr[模块示例](https://github.com/vitejs/vite-plugin-react)的预渲染流程，把静态末班数据插入进去
3. 输出html文件，写到dist中

## 思考

是不是看到了react ssr(服务端渲染)的最简化版本的影子。

## 使用意义

可以使用react进行静态模版渲染

- 运营提供一个表格，让我们渲染一个html表格文件，样式有要求

。。。