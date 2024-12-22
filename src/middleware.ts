import { defineMiddleware } from "astro:middleware";

export const prerender = false;

const privateRoutes = ["/protected"];

export const onRequest = defineMiddleware(({ url, request }, next) => {
  return next();
});
