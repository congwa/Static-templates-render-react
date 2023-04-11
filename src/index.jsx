import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactDOMServer from 'react-dom/server'



function App() {
  const data = {
    title: 'hello world',
    list: new Array(10).fill('hello world').map((str,index) => {
      return str + index
    })
  }
  return data.list.map(text => {
    return <div key={text}>{text}</div>
  })
}

if(import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

} 


// 如何build
/*

  async function getHtml() {
    // 使用 renderToString 将 React 组件渲染为 HTML 字符串
    const html = ReactDOMServer.renderToStaticMarkup(<App />);
    const template = await fs.readFile('../index.html', 'utf-8');
    const _html = template.replace('<!--#app-->', getHtml());
  
    await fs.writeFile('../dist/index.html', _html);
    return html
  }
  getHtml()

*/


