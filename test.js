const chai = require('chai');
const expect = chai.expect;
process.env.NODE_ENV = 'productio';

describe('#sum()', function () {
  // add a test hook
  beforeEach('before every match', function () {
    expect('userid').to.equal('userid');

    // ...some logic before each test is run
  });

  // test a functionality
  it('should add numbers', function () {
    // add an assertion
    expect(15).to.equal(15);
  });

  let tests = 1;

  // Will run after every test in every file
  afterEach('after add number ', function () {
    tests = tests += 1;
    console.log('Test #' + tests);
  });
});

const mobile = 6353438566;
it('skip for production', function () {
  if (process.env.NODE_ENV === 'production') {
    return this.skip();
  } else {
    return expect(typeof mobile).to.equal(typeof '45955555555555');
  }
});
