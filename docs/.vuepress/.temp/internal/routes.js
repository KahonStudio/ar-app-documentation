export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/materials-and-tools.html", { loader: () => import(/* webpackChunkName: "materials-and-tools.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/materials-and-tools.html.js"), meta: {"title":"Materials and Tools"} }],
  ["/orthographic-drawing.html", { loader: () => import(/* webpackChunkName: "orthographic-drawing.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/orthographic-drawing.html.js"), meta: {"title":"Orthographic Drawing"} }],
  ["/perspective-views.html", { loader: () => import(/* webpackChunkName: "perspective-views.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/perspective-views.html.js"), meta: {"title":"Perspective Views"} }],
  ["/practice-perspective-sheet.html", { loader: () => import(/* webpackChunkName: "practice-perspective-sheet.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/practice-perspective-sheet.html.js"), meta: {"title":"Practice Perspective Sheet"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/table-of-contents.html", { loader: () => import(/* webpackChunkName: "table-of-contents.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/table-of-contents.html.js"), meta: {"title":"Table of Contents"} }],
  ["/technical-drawing.html", { loader: () => import(/* webpackChunkName: "technical-drawing.html" */"C:/Users/James/Documents/GitHub/ar-app-documentation/docs/.vuepress/.temp/pages/technical-drawing.html.js"), meta: {"title":"Technical Drawing"} }],
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
