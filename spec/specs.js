describe('latinAy', function() {
  // it("finds the first vowel in a word", function() {
  //   expect(latinAy("apple")).to.equal("apple");
  // });
  it("adds 'ay' to the end of a word beginning witha vowel", function(){
    expect(latinAy("yggdrasil")).to.equal("asilyggdray");
  });
  it("slices the first consonant, puts it at the end of the word, then adds 'ay' to the end." , function(){
    expect(latinAy("squire")).to.equal("iresquay");
  });
  it("takes two consonants at the beginning of a word and moves them to the end.", function(){
    expect(latinAy("chair")).to.equal("airchay");
  });
  it ("finds a qu and adds ay to the end", function() {
    expect (latinAy("equinox")).to.equal("equinoxay")
  });
  it("treats y like a consonant, but only if it's index is zero" , function(){
    expect(latinAy("yak")).to.equal("akyay")
  });

});

// describe("consonantPosition", function(){
//   it("returns true if the specified position is a consonant", function(){
//     expect(consonantPosition("giraffe", 1)).to.equal(false);
//   });
//   it("returns false when the specified position is a consonant" , function(){
//     expect(consonantPosition("giraffe", 0)).to.equal(true);
//   });
// });

describe("firstVowel", function(){
  it("finds the first vowel in a word, returns position of first vowel", function() {
    expect(firstVowel("quaint")).to.equal(1);
  });
});
