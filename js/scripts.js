var latinAy = function(mericanWord) {

  var vowels = ["a","e","i","o","u","y"];
  for (var j = 0; j < vowels.length; j++) {
  var vowel = vowels[j];

  var findQ = mericanWord.search("qu");

  var splitQ = findQ + 2
  // console.log(splitQ)
  var findY = mericanWord.search("y")
  var splitY = findY + 1
  var splitAt = firstVowel(mericanWord);
    if (findQ > 0 && findQ <= 3) {
      if (mericanWord[0] === vowel) {
        return mericanWord.slice(splitAt) + mericanWord.slice(0, splitAt) + "ay"
    } else {
      return mericanWord.slice(splitQ) + mericanWord.slice(0, splitQ) + "ay"
  };

  } else if (findY === 0) {
    return mericanWord.slice(splitY) + mericanWord.slice(0, splitY) + "ay"
  } else {
  return mericanWord.slice(splitAt) + mericanWord.slice(0, splitAt) + "ay"
  };
  };
};

// var consonantPosition = function(word, position) {
//   var vowels = ["a","e","i","o","u"];
//   for (var i = 0; i < vowels.length; i++) {
//     if (word[position] === vowels[i]) {
//     return false;
//     }
//   }
//   return true;
// };

var firstVowel = function(word) {
  var vowels = ["a","e","i","o","u","y"];

  var letters = word.split("");
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    for (var j = 0; j < vowels.length; j++) {
      var vowel = vowels[j];

      if (letter === vowel) {
        return i;

      }
    }
  }
};

// } else if ((!consonantPosition(mericanWord , 1) && (consonantPosition(mericanWord , 2)))) {
//   var latinWord = mericanWord.slice(3) + mericanWord.slice(0 , 3);
// for (var q = 0; q < letters.length; q++) {
//   if (letters[0,1] === "qu") {}
