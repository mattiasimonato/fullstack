const insertLetter = require('../models/insertdata')

module.exports = async function add (ctx) {
  const data = await insertLetter.add({id: Date.now(), name: 'finalmente'})
  ctx.status = 200;
}
