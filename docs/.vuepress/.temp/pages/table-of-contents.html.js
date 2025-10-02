import comp from "C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/table-of-contents.html.vue"
const data = JSON.parse("{\"path\":\"/table-of-contents.html\",\"title\":\"Table of Contents\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Technical Drawing\",\"slug\":\"technical-drawing\",\"link\":\"#technical-drawing\",\"children\":[]},{\"level\":3,\"title\":\"Materials and Tools\",\"slug\":\"materials-and-tools\",\"link\":\"#materials-and-tools\",\"children\":[]},{\"level\":3,\"title\":\"Orthographic Drawing\",\"slug\":\"orthographic-drawing\",\"link\":\"#orthographic-drawing\",\"children\":[]},{\"level\":3,\"title\":\"Perspective Views\",\"slug\":\"perspective-views\",\"link\":\"#perspective-views\",\"children\":[]},{\"level\":3,\"title\":\"Foreshortening\",\"slug\":\"foreshortening\",\"link\":\"#foreshortening\",\"children\":[]}],\"git\":{\"updatedTime\":1759387212000,\"contributors\":[{\"name\":\"KahonStudio\",\"username\":\"KahonStudio\",\"email\":\"itsmeibay@gmail.com\",\"commits\":2,\"url\":\"https://github.com/KahonStudio\"}],\"changelog\":[{\"hash\":\"ffd4d8343bc3f258aa10793fda1e0a46d6fd958a\",\"time\":1759387212000,\"email\":\"itsmeibay@gmail.com\",\"author\":\"KahonStudio\",\"message\":\"try deployment 1\"},{\"hash\":\"e23538212698ae3fb9d8d8adb05da6851ac20b02\",\"time\":1759385756000,\"email\":\"itsmeibay@gmail.com\",\"author\":\"KahonStudio\",\"message\":\"table of contents and homepage\"}]},\"filePathRelative\":\"table-of-contents.md\"}")
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
