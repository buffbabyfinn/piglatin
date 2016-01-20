var latinAy = function(mericanWord) {
  if (vowelPosition(mericanWord, 0)) {
    var latinWord = mericanWord;
  } else if (vowelPosition(mericanWord , 1)) {
    var latinWord = mericanWord.slice(1) + mericanWord.slice(0 , 1);
  } else if (vowelPosition(mericanWord , 2)) {
    var latinWord = mericanWord.slice(2) + mericanWord.slice(0 , 2);
  } else{

  }

  return latinWord + 'ay';
};
var vowelPosition = function(word, position) {
  var vowels = ["a","e","i","o","u"];
  for (var i = 0; i < vowels.length; i++) {
    if (word[position] === vowels[i]) {
    return true;
    }
  }
  return false
};
