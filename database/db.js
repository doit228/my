const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})


module.exports = db;