const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const name = require('../controllers/letters');
const postLetter = require('../controllers/addletters');


router.get('/letter', ctx => {
  name().then((data, fail) => {
    console.log(data);
    ctx.status = 200;
  })
});

router.post('/addletter', postLetter);

module.exports = router;
