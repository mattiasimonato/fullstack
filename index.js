const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
//const logger = require('koa-logger');
const router = require('./server/router');
const bodyParser = require('koa-bodyparser');

app
.use(serve('./client'))
.use(bodyParser())
.use(router.routes())
.listen(3000);
