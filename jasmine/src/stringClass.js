//Prototype methods to the String object to manipulate strings.
//Author: Gertrude Nyenyeshi.
//Purpose: Andela JavaScript Checkpoint - 2.

String.prototype.hasVowels = function() {
  if this.match(/[aeiou]/g) {
    return true;
  } else {
    return false;
  }
};

String.prototype.toUpper = function() {
  return this.replace(/[a-z]/g, function(val) {
    return String.fromCharCode(val.charCodeAt() - 32);
  });
};

String.prototype.toLower = function() {
  return this.replace(/[A-Z]/g, function(val) {
    return String.fromCharCode(val.charCodeAt() + 32);
  });
};

String.prototype.ucFirst = function() {
  return this.replace(this[0], function(val) {
    return String.fromCharCode(val.charCodeAt() + 32);
  });
};

String.prototype.wordCount = function() {
  var pos = 0
  for (var i = 0; i < this.length; i++) {
    if(this[i].match(/[a-z]/g) || this[i].match(/[A-Z]/g)) {
      pos++;
    }
  }
  return pos;
}