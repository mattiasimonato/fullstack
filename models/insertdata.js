const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/Letters');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to the db...');
})

const letterSchema = mongoose.Schema({
  id: Number,
  name: String
});

const Letter = mongoose.model('Letters', letterSchema);

function add(obj) {
  return new Promise((resolved, rejected) => {
    const addLetter = new Letter(obj)
    addLetter.save((err, letter) => {
      if (err) return rejected(err);
      resolved('ok');
    });
  });
}

function retrieveAll() {
  return new Promise ((resolved, rejected) => {
    Letter.find((err, letter) => {
      if (err) return rejected(err);
      //ctx.response.body = 'hello';
      resolved(letter);
    });
  })
}

module.exports = {
  retrieveAll: retrieveAll,
  add: add
}
