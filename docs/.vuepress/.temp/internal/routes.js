export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/foreshortening.html", { loader: () => import(/* webpackChunkName: "foreshortening.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/foreshortening.html.js"), meta: {"title":"Foreshortening"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/materials-and-tools.html", { loader: () => import(/* webpackChunkName: "materials-and-tools.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/materials-and-tools.html.js"), meta: {"title":"Materials and Tools"} }],
  ["/orthographic-drawing.html", { loader: () => import(/* webpackChunkName: "orthographic-drawing.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/orthographic-drawing.html.js"), meta: {"title":"Orthographic Drawing"} }],
  ["/perspective-views.html", { loader: () => import(/* webpackChunkName: "perspective-views.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/perspective-views.html.js"), meta: {"title":"Perspective Views"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/technical-drawing.html", { loader: () => import(/* webpackChunkName: "technical-drawing.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/technical-drawing.html.js"), meta: {"title":"Technical Drawing"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/James/Documents/GitHub/vuepress-ar-app/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
