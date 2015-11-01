var expect = require('chai').expect,
    Manager = require('./../../src/people/manager'),
    Apartment = require('./../../src/apartment');

describe('Manager', function() {
  var bob = new Manager('Bob Brannan', '555-555-555'),
      avalon = new Apartment('555 5th Street');

  it ('should initially have no apartments', function() {
    expect(bob.apartments).to.eql([]);
  });

  describe('#addProperty', function() {
    it ('should add new property', function() {
      bob.addProperty(avalon);
      expect(bob.apartments).to.eql([avalon]);
    });
  });

  describe('#removeProperty', function() {
    it ('should remove the property', function() {
      bob.removeProperty(avalon);
      expect(bob.apartments).to.eql([]);
    });
  });

});