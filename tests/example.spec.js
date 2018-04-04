import chai from 'chai';

const should = chai.should();

const add = (a, b) => a + b;

describe('Example Test:', () => {
  describe('add', () => {
    it('should be able to add two numbers', () => {
      add(5, 5).should.equal(10);
      add(4, -1).should.equal(3);
    });
  });
});
