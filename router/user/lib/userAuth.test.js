var app = require('../../../index');
var chai = require('chai');
var test = require('supertest');

var expect = chai.expect;

let routes;
describe('API Tests', () => {
  before(() => {
    routes = {
      register: '/user/register',
    };
  });
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
        .post(routes.register)
        .send(user)
        .end((err, res) => {
          if (err) done(err);
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('## already exist User with this Email', () => {
    it('already exist user', (done) => {
      test(app)
        .post('/user/register')
        .send(user)
        .end(function (err, res) {
          if (err) done(err);
          const me = JSON.parse(res.text);
          expect(res.statusCode).to.equal(419);
          done();
        });
    });
  });
});
