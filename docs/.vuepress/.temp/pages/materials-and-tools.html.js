import comp from "C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/materials-and-tools.html.vue"
const data = JSON.parse("{\"path\":\"/materials-and-tools.html\",\"title\":\"Materials and Tools\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Sketchbook\",\"slug\":\"sketchbook\",\"link\":\"#sketchbook\",\"children\":[]},{\"level\":2,\"title\":\"Pencil\",\"slug\":\"pencil\",\"link\":\"#pencil\",\"children\":[]},{\"level\":2,\"title\":\"Eraser\",\"slug\":\"eraser\",\"link\":\"#eraser\",\"children\":[]},{\"level\":2,\"title\":\"Ruler\",\"slug\":\"ruler\",\"link\":\"#ruler\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"materials-and-tools.md\"}")
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
