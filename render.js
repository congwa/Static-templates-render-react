import fs from 'fs/promises'

async function run() {
  // 使用 renderToString 将 React 组件渲染为 HTML 字符串
  const template = await fs.readFile('./index.html', 'utf-8')
  const { render } = await import('./dist/server/server.js')
  const appHTML = render()
  console.log(appHTML)
  const _html = template.replace('<!--#app-->', appHTML)
  await fs.writeFile('./dist/index.html', _html)
}

run()


