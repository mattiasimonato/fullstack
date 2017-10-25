const insertLetter = require('../models/insertdata')

module.exports = function add (ctx) {

  // let res = arr.filter(letter => {
  //   return typeof letter === 'string';
  // });

  insertLetter({id: 5, name: 'v'}).then((data) => {
    ctx.status = 200;
    ctx.response.body = 'ok';
  });
}
