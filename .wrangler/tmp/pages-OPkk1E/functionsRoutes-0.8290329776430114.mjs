import { onRequestGet as __api_reviews_js_onRequestGet } from "D:\\Projects\\droparabia-official\\functions\\api\\reviews.js"
import { onRequestPost as __api_reviews_js_onRequestPost } from "D:\\Projects\\droparabia-official\\functions\\api\\reviews.js"

export const routes = [
    {
      routePath: "/api/reviews",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_reviews_js_onRequestGet],
    },
  {
      routePath: "/api/reviews",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_reviews_js_onRequestPost],
    },
  ]