import ReactDOMServer from 'react-dom/server'
import React from 'react'
import renderPage from './HtmlBody.js'

const data = {
  title: 'hello world',
  list: new Array(10).fill('hello world').map((str,index) => {
    return str + index
  })
}

const Render = (props) => {
  return props.data.map(text => {
    return <div key={text}>{text}</div>
  })
}


console.log(
  renderPage({
    body: ReactDOMServer.renderToStaticMarkup(<Render data={data.list}></Render>),
    title: data.title
  })
  
)