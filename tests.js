var expect = require('expect.js');
var circulate = require('./circulate');

describe('circulate', function() {

  it('should loop', function() {
    var next = circulate([1,2,3]);
    expect(next()).to.be.equal(1);
    expect(next()).to.be.equal(2);
    expect(next()).to.be.equal(3);
    expect(next()).to.be.equal(1);
    expect(next()).to.be.equal(2);
  });

});
