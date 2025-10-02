import comp from "C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/table-of-contents.html.vue"
const data = JSON.parse("{\"path\":\"/table-of-contents.html\",\"title\":\"Table of Contents\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Technical Drawing\",\"slug\":\"technical-drawing\",\"link\":\"#technical-drawing\",\"children\":[]},{\"level\":3,\"title\":\"Materials and Tools\",\"slug\":\"materials-and-tools\",\"link\":\"#materials-and-tools\",\"children\":[]},{\"level\":3,\"title\":\"Orthographic Drawing\",\"slug\":\"orthographic-drawing\",\"link\":\"#orthographic-drawing\",\"children\":[]},{\"level\":3,\"title\":\"Perspective Views\",\"slug\":\"perspective-views\",\"link\":\"#perspective-views\",\"children\":[]},{\"level\":3,\"title\":\"Foreshortening\",\"slug\":\"foreshortening\",\"link\":\"#foreshortening\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"table-of-contents.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
