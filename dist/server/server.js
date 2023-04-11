import { jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
function App() {
  const data = {
    title: "hello world",
    list: new Array(10).fill("hello world").map((str, index) => {
      return str + index;
    })
  };
  return data.list.map((text) => {
    return /* @__PURE__ */ jsx("div", { children: text }, text);
  });
}
function render() {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
