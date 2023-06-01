var app = require('../index');
var chai = require('chai');
var test = require('supertest');

var expect = chai.expect;

describe('API Tests', () => {
  var user = {
    sUserName: 'ashvinss',
    sEmail: 'ashifhhd@gmial.com',
    sMobile: '6353438656',
    sPassword: 'a z{ type: String }',
    nAge: 21,
  };

  describe('## Create task ', () => {
    it('should create a task', (done) => {
      test(app)
        .post('/user/register')
        .send(user)
        .end(function (err, res) {
          // expect(res.text).to.equal(JSON.stringify({ message: 'Email' }));
          expect(res.statusCode).to.equal(200);
          expect(res.body.sUserName).to.equal('ashvin');
          user = res.body;
          done();
        });
    });
  });
});

//   describe('# Get all tasks', function () {
//     it('should get all tasks', function (done) {
//       request(app)
//         .get('/tasks')
//         .end(function (err, res) {
//           expect(res.statusCode).to.equal(200);
//           expect(res.body).to.be.an('array');
//           done();
//         });
//     });
//   });
//   describe('Get a task by id', function () {
//     it('should get a task', function (done) {
//       request(app)
//         .get('/tasks/' + task._id)
//         .end(function (err, res) {
//           expect(res.statusCode).to.equal(200);
//           expect(res.body.name).to.equal('integration test');
//           done();
//         });
//     });
//   });

//   describe('Update a task by id', function () {
//     it('should modify a task', function (done) {
//       task.name = 'New Task';
//       request(app)
//         .put('/tasks/' + task._id)
//         .send(task)
//         .end(function (err, res) {
//           expect(res.body.name).to.equal('New Task');
//           expect(res.statusCode).to.equal(200);
//           done();
//         });
//     });
//   });
//   describe('Delete a task by id', function () {
//     it('should delete a task', function (done) {
//       request(app)
//         .delete('/tasks/' + task._id)
//         .end(function (err, res) {
//           expect(res.statusCode).to.equal(200);
//           expect(res.body.message).to.equal('Task successfully deleted');
//           done();
//         });
//     });
//   });
// });
