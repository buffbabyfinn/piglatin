describe('latinAy', function() {
  // it("finds the first vowel in a word", function() {
  //   expect(latinAy("apple")).to.equal("apple");
  // });
  it("adds 'ay' to the end of a word beginning witha vowel", function(){
    expect(latinAy("elephant")).to.equal("elephantay");
  });
  it("slices the first consonant, puts it at the end of the word, then adds 'ay' to the end." , function(){
    expect(latinAy("tick")).to.equal("icktay");
  });
  it("takes two consonants at the beginning of a word and moves them to the end.", function(){
    expect(latinAy("chair")).to.equal("airchay");
  });

});
describe("vowelPosition", function(){
  it("returns true if the specified position is a vowel", function(){
    expect(vowelPosition("giraffe", 1)).to.equal(true);
  });
  it("returns false when the specified position is not a vowel" , function(){
    expect(vowelPosition("giraffe", 0)).to.equal(false);
  });
});
