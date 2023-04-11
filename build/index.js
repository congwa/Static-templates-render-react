import ReactDOMServer from 'react-dom/server';
import React from 'react';
import renderPage from './HtmlBody.js';
const data = {
  title: 'hello world',
  list: new Array(10).fill('hello world').map((str, index) => {
    return str + index;
  })
};
const Render = props => {
  return props.data.map(text => {
    return /*#__PURE__*/React.createElement("div", {
      key: text
    }, text);
  });
};
console.log(renderPage({
  body: ReactDOMServer.renderToStaticMarkup( /*#__PURE__*/React.createElement(Render, {
    data: data.list
  })),
  title: data.title
}));