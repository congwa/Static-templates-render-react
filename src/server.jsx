import App from './index'
import ReactDOMServer from 'react-dom/server'
import React from 'react'


export function render() {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
