const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;

// Require your Mongoose models here
const { User } = require('./models'); // Assuming you have a User model defined in a separate file

describe('Mongoose Database Connection', () => {
  before((done) => {
    // Connect to the MongoDB database
    mongoose.connect('mongodb://localhost/myLocalDb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', () => {
      console.log('Connected to the database!');
      done(); // Call done() to indicate that the before hook has completed
    });
  });

  after((done) => {
    // Close the database connection after all tests are finished
    mongoose.connection.close(() => {
      console.log('Database connection closed.');
      done(); // Call done() to indicate that the after hook has completed
    });
  });

  it('should retrieve a list of models', () => {
    const models = mongoose.modelNames();
    expect(models).to.include('users'); // Change 'User' to match your model name
  });

  it('should save and retrieve data', (done) => {
    const newUser = new User({
      sUserName: 'Ashvin Vanol',
      sEmail: 'AShvin@gmail.com',
      nAge: 25,
      sMobile: '6353438566',
      sPassword: 'Ashvin@1234',
    });
    newUser
      .save()
      .then(() => User.find({ sUserName: 'Ashvin Vanol' }))
      .then((user) => {
        expect(user).to.have.lengthOf(1);
        expect(user[0].sUserName).to.equal('Ashvin Vanol');
        done();
      })
      .catch((err) => done(err));
  });

  it('should use static methods', (done) => {
    User.find({ nAge: 25 })
      .then((users) => {
        expect(users).to.have.lengthOf(1);
        expect(users[0].nAge).to.equal(25);
        done();
      })
      .catch((err) => done(err));
  });
});
