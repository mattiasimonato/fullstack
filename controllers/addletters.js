const insertLetter = require('../models/insertdata')

module.exports = async function add (ctx) {

  // let res = arr.filter(letter => {
  //   return typeof letter === 'string';
  // });

  const data = await insertLetter({id: Date.now(), name: 'blabla'})
  ctx.response.body = 'ok';
  
}
