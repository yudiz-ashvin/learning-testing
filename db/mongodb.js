/* eslint-disable new-cap */
const mongoose = require('mongoose');
var chai = require('chai');

function MongoClient() {
  this.options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
}

MongoClient.prototype.initialize = async function () {
  mongoose
    .set('strictQuery', false)
    .connect('mongodb://localhost:27017/supertest', this.options)
    .then(() => console.log('Database connected'))
    .catch((error) => {
      throw error;
    });
};

MongoClient.prototype.mongify = function (id) {
  return mongoose.Types.ObjectId(id);
};

module.exports = new MongoClient();
