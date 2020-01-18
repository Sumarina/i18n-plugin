const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const bodyparser = require('koa-bodyparser');
const path = require('path');

const utils = require('./utils');

const staticPath = './src';

const app = new Koa();
const router = new Router();

app.use(static(path.join(__dirname, staticPath)));

app.use(bodyparser());

router.get('/query', ctx => {
  ctx.body = { status: 'success' };
});
router.post('/add', ctx => {
  const data = ctx.body.data;
  console.log(data);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(9090, error => {
  if (error) {
    throw error;
  }
  console.log('running...');
});
