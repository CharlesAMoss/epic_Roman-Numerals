describe('roman', function() {
  it("inputs a number and outputs a string", function() {
    expect(roman(1999)).to.be.a('string');
  });

  it("takes input number and returns roman numerals", function() {
    expect(roman(2012)).to.equal("MMXII");
  });
});
