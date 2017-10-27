const removeLetter = require('../models/insertdata')

module.exports = async function remove (ctx) {
  console.log("hello", ctx.request.body)
  const data = await removeLetter.remove(ctx.request.body);
  ctx.status = 200;
}
