import type { AppRouteHandlerFn } from "next/dist/server/future/route-modules/app-route/module"

export const GET: AppRouteHandlerFn = () => {
    return new Response("hi")
}