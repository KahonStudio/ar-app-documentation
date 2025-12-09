import comp from "C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/drawing-exercise.html.vue"
const data = JSON.parse("{\"path\":\"/drawing-exercise.html\",\"title\":\"Drawing Exercise\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1765259401000,\"contributors\":[{\"name\":\"KahonStudio\",\"username\":\"KahonStudio\",\"email\":\"itsmeibay@gmail.com\",\"commits\":2,\"url\":\"https://github.com/KahonStudio\"}],\"changelog\":[{\"hash\":\"49fa1046f5e57fe43f427167abcc474db79f21cf\",\"time\":1765259401000,\"email\":\"itsmeibay@gmail.com\",\"author\":\"KahonStudio\",\"message\":\"fixed technical drawing bug.\"},{\"hash\":\"51ecf53ba3367489e6aa98e39c076b64953ea031\",\"time\":1765258710000,\"email\":\"itsmeibay@gmail.com\",\"author\":\"KahonStudio\",\"message\":\"final\"}]},\"filePathRelative\":\"drawing-exercise.md\"}")
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
