# bauth

* [betterauth](https://www.better-auth.com/docs/installation)
* [drizzle](https://orm.drizzle.team/docs/connect-cloudflare-d1)

```bash


pnpm wrangler d1 create bauth-db
pnpm db:push

pnpm build
wrangler deploy


# 500 internal error
wrangler tail
curl https://bauth.fbehrens.workers.dev/
# [500] GET /
# Error: Can only read the current request event inside functions invoked during `handle`, such as server `load` functions, actions, endpoints, and other server hooks. In environments without `AsyncLocalStorage`, the event must be read synchronously, not after an `await`.
#     at getRequestEvent (worker.js:1383:11)
#     at Object.database (worker.js:67195:23)
#     at getAdapter (worker.js:57836:21)
#     at init (worker.js:59739:29)
#     at betterAuth (worker.js:59864:27)
#     at .svelte-kit/output/server/chunks/hooks.server.js (worker.js:67193:12)
#     at __init (worker.js:5:56)
#     at worker.js:69284:124
#     at async get_hooks (worker.js:69284:88)
#     at async worker.js:73836:24


```
