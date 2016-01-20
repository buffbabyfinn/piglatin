var latinAy = function(mericanWord) {
  var splitAt = firstVowel(mericanWord);
  return mericanWord.slice(splitAt) + mericanWord.slice(0, splitAt) + 'ay';
  // if (!consonantPosition(mericanWord , 0)) {
  //   var latinWord = mericanWord;
  // } else if (consonantPosition(mericanWord , 1)) {
  //   var latinWord = mericanWord.slice(2) + mericanWord.slice(0 , 2);
  // } else if (consonantPosition(mericanWord , 0)) {
  //   var latinWord = mericanWord.slice(1) + mericanWord.slice(0 , 1);
  // }
  //
  // return latinWord + 'ay';
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
  var vowels = ["a","e","i","o","u"];
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
