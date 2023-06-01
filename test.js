var app = require('./index');
var chai = require('chai');
var test = require('supertest');

var expect = chai.expect;

describe('API Tests', () => {
  const user = {
    sUserName: 'ashvin',
    sEmail: 'AShvin@gmail.com',
    sMobile: '6353438656',
    sPassword: 'Ashvin@123',
    nAge: 21,
  };

  describe('## Create user ', () => {
    it('should create a user', (done) => {
      test(app)
        .post('/user/register')
        .send(user)
        .end(function (err, res) {
          console.log('create user :::', res.statusCode);
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
    it('already exist user', (done) => {
      test(app)
        .post('/user/register')
        .send(user)
        .end(function (err, res) {
          console.log('exist user :::', res.statusCode);
          const me = JSON.parse(res.text);
          expect(res.statusCode).to.equal(419);
          done();
        });
    });
  });
});
