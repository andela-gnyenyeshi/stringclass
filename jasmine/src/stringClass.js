//Prototype methods to the String object to manipulate strings.
//Author: Gertrude Nyenyeshi.
//Purpose: Andela JavaScript Checkpoint - 2.

String.prototype.hasVowels = function() {
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
  var first = this.charAt(0);
  var empty = '';
  var empty = empty + first.toUpper();
  for (var i = 1, i < this.length; i++) {
    empty = empty + this[i];
  }
  return empty;
};

String.prototype.isQuestion = function() {
  return /\?&/.test(this);
}

String.prototype.word = function() {
  var empty = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i].match(/[a-z]/g) || this[i].match(/[A-Z]/g)) {
      empty.push(this[i]);
    }
  }
  return empty;
}

String.prototype.wordCount = function() {
  var count = this.word();
  return count.length;
}

String.prototype.toCurrency = function() {

}

String.prototype.fromCurrency = function() {
  
}