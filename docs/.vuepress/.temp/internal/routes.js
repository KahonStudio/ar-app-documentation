export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/drawing-exercise.html", { loader: () => import(/* webpackChunkName: "drawing-exercise.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/drawing-exercise.html.js"), meta: {"title":"Drawing Exercise"} }],
  ["/guide-on-how-to-create-an-orthographic-drawing.html", { loader: () => import(/* webpackChunkName: "guide-on-how-to-create-an-orthographic-drawing.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/guide-on-how-to-create-an-orthographic-drawing.html.js"), meta: {"title":"Guide on How to Create an Orthographic Drawing"} }],
  ["/materials-and-tools.html", { loader: () => import(/* webpackChunkName: "materials-and-tools.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/materials-and-tools.html.js"), meta: {"title":"Material and Tools"} }],
  ["/one-point-perspective.html", { loader: () => import(/* webpackChunkName: "one-point-perspective.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/one-point-perspective.html.js"), meta: {"title":"One-Point Perspective"} }],
  ["/orthographic-drawing.html", { loader: () => import(/* webpackChunkName: "orthographic-drawing.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/orthographic-drawing.html.js"), meta: {"title":"Orthographic Drawing"} }],
  ["/perspective-views.html", { loader: () => import(/* webpackChunkName: "perspective-views.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/perspective-views.html.js"), meta: {"title":"Perspective Views"} }],
  ["/perspective.html", { loader: () => import(/* webpackChunkName: "perspective.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/perspective.html.js"), meta: {"title":"Perspective"} }],
  ["/practice-perspective-sheet.html", { loader: () => import(/* webpackChunkName: "practice-perspective-sheet.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/practice-perspective-sheet.html.js"), meta: {"title":"Practice Perspective Sheet"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/references.html", { loader: () => import(/* webpackChunkName: "references.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/references.html.js"), meta: {"title":"References"} }],
  ["/steps-on-how-to-create-one-point-perspective.html", { loader: () => import(/* webpackChunkName: "steps-on-how-to-create-one-point-perspective.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/steps-on-how-to-create-one-point-perspective.html.js"), meta: {"title":"Steps on How to Create One-Point Perspective"} }],
  ["/steps-on-how-to-create-three-point-perspective.html", { loader: () => import(/* webpackChunkName: "steps-on-how-to-create-three-point-perspective.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/steps-on-how-to-create-three-point-perspective.html.js"), meta: {"title":"Steps on How to Create Three-Point Perspective"} }],
  ["/steps-on-how-to-create-two-point-perspective.html", { loader: () => import(/* webpackChunkName: "steps-on-how-to-create-two-point-perspective.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/steps-on-how-to-create-two-point-perspective.html.js"), meta: {"title":"Steps on How to Create Two-Point Perspective"} }],
  ["/table-of-contents.html", { loader: () => import(/* webpackChunkName: "table-of-contents.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/table-of-contents.html.js"), meta: {"title":"Table of Contents"} }],
  ["/technical-drawing.html", { loader: () => import(/* webpackChunkName: "technical-drawing.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/technical-drawing.html.js"), meta: {"title":"Technical Drawing"} }],
  ["/three-point-perspective.html", { loader: () => import(/* webpackChunkName: "three-point-perspective.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/three-point-perspective.html.js"), meta: {"title":"Three-Point Perspective"} }],
  ["/two-point-perspective.html", { loader: () => import(/* webpackChunkName: "two-point-perspective.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/two-point-perspective.html.js"), meta: {"title":"Two-Point Perspective"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
