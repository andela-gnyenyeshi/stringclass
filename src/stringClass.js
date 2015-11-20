// Prototype methods to the String object to manipulate strings.
// Author: Gertrude Nyenyeshi.
// Purpose: Andela JavaScript Checkpoint - 2.
(function() {
  'use strict';
  // Method to check if the instance of the String object has a vowel.
  String.prototype.hasVowels = function() {
    // The RegEx test method returns true/false for the String instance
    return /[aeiou]/gi.test(this);
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
    if (!(/[A-Z]/.test(trimmed))) {
      return this.replace(/[a-z]/, function(val) {
        // Callback function for that character. Converts and returns character in upper case.
        return String.fromCharCode(val.charCodeAt() - 32);
      });
    } else {
      return trimmed;
    }
  };

  // Method to check whether the String instance is a question.
  String.prototype.isQuestion = function() {
    return /\?$/.test(this);
  };

  // Method to return a list of the words present in the String instance in an Array.
  String.prototype.word = function() {
    var arr = this.split(' ');
    var empty = [];
    // Loops through the array formed from everything in the String instance.
    for (var i = 0; i < arr.length; i++) {
      // Replace anything that is not a letter with an empty space.
      var temp = arr[i].replace(/[^A-Za-z]/g, '');
      if (temp !== '') {
        empty.push(temp);
      }
    }
    return empty;
  };

  // Method to return the length of the list produced by the word() method.
  String.prototype.wordCount = function() {
    return this.word().length;
  };

  // Method to return the String instance to currency format.
  String.prototype.toCurrency = function() {
    // Change to number and set the decimal points to two.
    var temp = (Number(this.replace(/[^0-9\.]/g, ''))).toFixed(2);
    // RegExp to add commas after every three digits.
    return temp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  // Method to convert from string currency to a number representation.
  String.prototype.fromCurrency = function() {
    return Number((Number(this.replace(/[^\.0-9]/g, ''))).toFixed(2));
  };
})();
