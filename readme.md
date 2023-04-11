# 用react作为模版进行渲染

react ssr的一种应用

## 过程

1. 使用react静态渲染api（ReactDOMServer.renderToStaticMarkup）把react转化为字符串
2. 把字符串插入模版(HtmlBody)中
3. 使用babel把jsx语法转化成React.createElement的形式就可以使用node直接执行

## 思考

是不是看到了react ssr(服务端渲染)的最简化版本的影子。

## 使用意义

可以使用react进行静态模版渲染

- 运营提供一个表格，让我们渲染一个html表格文件，样式有要求

。。。