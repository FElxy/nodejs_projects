import Koa from 'koa'
import Router from '@koa/router';

const staticRouter = new Router()

staticRouter.get('/', async (ctx:Koa.Context) => {
  ctx.body = "Hello world"
})

export { staticRouter }
