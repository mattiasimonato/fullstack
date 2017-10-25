const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const name = require('../controllers/get-letters');
const postLetter = require('../controllers/add-letters');


router.get('/letter', name);

router.post('/addletter', postLetter);

module.exports = router;
