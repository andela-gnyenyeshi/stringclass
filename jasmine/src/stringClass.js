//Prototype methods to the String object to manipulate strings.
//Author: Gertrude Nyenyeshi.
//Purpose: Andela JavaScript Checkpoint - 2.

// Method to check if the instance of the String object has a vowel.
String.prototype.hasVowels = function() {
  // The RegEx test method returns true/false for the String instance
  return /[aeiou]/g.test(this);
};

// Method to convert the String instance to Upper case.
String.prototype.toUpper = function() {
  // Checks and replaces any character in the String instance that is in lower case.
  return this.replace(/[a-z]/g, function(val) {
    // Callback function for every character. Converts and returns character in upper case.
    return String.fromCharCode(val.charCodeAt() - 32);
  });
};

// Method to convert String instance to lower case.
String.prototype.toLower = function() {
  // Check and replaces any character in the String instance that is in upper case.
  return this.replace(/[A-Z]/g, function(val) {
    // Callback fnction for every character. Converts and returns character in lower case.
    return String.fromCharCode(val.charCodeAt() + 32);
  });
};

// Method to convert first character of the String instance to upper case.
String.prototype.ucFirst = function() {
  // Removes whitespaces at the beginning and end of string.
  var trimmed = this.trim();
  // Gets the first character of the String instance.
  var first = trimmed.charAt(0)
  var empty = '';
  // Uses toUpper() method to convert to upper case and pushes to new empty string.
  empty += first.toUpper();
  for (var i = 1; i < trimmed.length; i++) {
    // Loops and pushes the rest to the new string.
    empty += trimmed[i];
  }
  return empty;
};


String.prototype.isQuestion = function() {
  return /\?$/.test(this);
};

String.prototype.word = function() {
  var empty = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i].match(/[a-z]/g) || this[i].match(/[A-Z]/g)) {
      empty.push(this[i]);
    }
  }
  return empty;
};

String.prototype.wordCount = function() {
  var count = this.word();
  return count.length;
};

String.prototype.toCurrency = function() {

};

String.prototype.fromCurrency = function() {

};