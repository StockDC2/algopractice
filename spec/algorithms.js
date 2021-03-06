/* global algorithms, describe, it, expect, should */

describe('reverseString', function () {
  'use strict';

  it('exists', function () {
    expect(reverseString).to.be.a('function');

  });

  it('should reverse a string', () => {
    expect(reverseString("hello")).to.equal("olleh");
    expect(reverseString("Greetings from Earth")).to.equal("htraE morf sgniteerG");
  });

  // Add more assertions here
});


describe('factorialize', function () {
  'use strict';

  it('exists', function () {
    expect(factorialize).to.be.a('function');
  });

  it('should calculate the factorial', () => {
    expect(factorialize(5)).to.equal(120);
    expect(factorialize(10)).to.equal(3628800);
    expect(factorialize(20)).to.equal(2432902008176640000);
    expect(factorialize(0)).to.equal(1);
  });

  // Add more assertions here
});


describe('repeat', function () {
  'use strict';

  it('exists', function () {
    expect(repeat).to.be.a('function');
  });

  it('should repeat str count number of times', () => {
    expect(repeat('*', 3)).to.equal('***');
    expect(repeat("abc", 3)).to.equal("abcabcabc");
    expect(repeat("abc", 4)).to.equal("abcabcabcabc");
    expect(repeat("abc", 1)).to.equal("abc");
  });

  // Add more assertions here
});
