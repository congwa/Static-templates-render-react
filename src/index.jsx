import React from 'react'




export default function App() {
  const data = {
    title: 'hello world',
    list: new Array(11).fill('hello world').map((str,index) => {
      return str + index
    })
  }
  return data.list.map(text => {
    return <div key={text}>{text}</div>
  })
}





