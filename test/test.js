var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

it('double done', function (done) {
  // Calling `done()` twice is an error
  setImmediate(done);
  //   setImmediate(done);
});

describe('Basic Mocha String Test', function () {
  it('should return number of charachters in a string', function () {
    // assert.equal('Hell'.length, 4);
    assert.notEqual('hell', 'tell');
  });
  it('should return first charachter of the string', function () {
    assert.equal('Hello'.charAt(0), 'H');
  });
});

//===================================================================
// expect using chai
// Test-Driven Development (TDD) and Behaviour-Driven Development (BDD).
/*
- expect() – It is a BDD style library. Natural language assertions are chained together here. This is mainly used with non-descript topics such as booleans or numbers.
- should() – It is a BDD style library. Natural language assertions are chained together in this case as well. However, it extends each object with a should property to start the chain.
- assert() – It is a TDD style library. It provides additional tests and is browser compatible.
*/
const chai = require('chai');
const expect = chai.expect;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : undefined);

describe('Calculator', () => {
  describe('Addition', () => {
    it('1 + 1 should be equals to 2', () => {
      expect(add(1, 1)).to.equal(2);
    });
    it('should sum two numbers', () => {
      expect(add(2, 2)).to.equal(4);
      expect(add(50, 39)).to.equal(89);
      expect(add(-31, 32)).to.equal(1);
      expect(add(10000, 89999)).to.equal(99999);
    });
  });

  describe('Subtraction', () => {
    it('1 - 1 should be equals to 0', () => {
      expect(subtract(1, 1)).to.equal(0);
    });
    it('should subtract two numbers', () => {
      expect(subtract(6, 2)).to.equal(4);
      expect(subtract(50, 39)).to.equal(11);
      expect(subtract(-31, 32)).to.equal(-63);
      expect(subtract(10000, 89999)).to.equal(-79999);
    });
  });

  describe('Multiplication', () => {
    it('1 * 1 should be equals to 1', () => {
      expect(multiply(1, 1)).to.equal(1);
    });
    it('should multiply two numbers', () => {
      expect(multiply(3, 2)).to.equal(6);
      expect(multiply(50, 39)).to.equal(1950);
      expect(multiply(-31, 32)).to.equal(-992);
      expect(multiply(-5, -2)).to.equal(10);
    });
  });

  describe('Division', () => {
    it('1 / 1 should be equals to 1', () => {
      expect(divide(1, 1)).to.equal(1);
    });
    it('should divide two numbers', () => {
      expect(divide(4, 2)).to.equal(2);
      expect(divide(50, 5)).to.equal(10);
      expect(divide(-15, 2)).to.equal(-7.5);
    });
    it('should return NaN if the denominator is zero', () => {
      expect(divide(4, 0)).to.equal(undefined);
      expect(divide(50, 0)).to.equal(undefined);
      expect(divide(-15, 0)).to.equal(undefined);
    });
  });
});

it('Homer should drink beer', () => {
  assert.equal('Homer should drink beer', 'Homer should drink beer');
  /** Test cases */
});
