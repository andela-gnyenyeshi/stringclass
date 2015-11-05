//Prototype methods to the String object to manipulate strings.
//Author: Gertrude Nyenyeshi.
//Purpose: Andela JavaScript Checkpoint - 2.

String.prototype.hasVowels = function () {
 return /[aeiou]/g.test(this);
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
  return this.replace(0, function(val) {
    return String.fromCharCode(val.charCodeAt() + 32);
  });
};