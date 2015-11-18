(function() {
  'use-strict';
  describe('Prototypal methods of the String class', function() {
    describe('Should return true if string has vowels', function() {
      it('Should return true for \'Sheshe\'', function() {
        var one = 'Sheshe';
        expect(one.hasVowels()).toBeTruthy();
      });
      it('Should return true for \'my nAme\'', function() {
        var three = 'my nAme';
        expect(three.hasVowels()).toBeTruthy();
      });
      it('Should return false for \'shy my\'', function() {
        var two = 'shy my';
        expect(two.hasVowels()).toBeFalsy();
      });
      it('Should return false for \'zzz\'', function() {
        var four = 'zzz';
        expect(four.hasVowels()).toBeFalsy();
      });
      it('Should return false for \'9090\'', function() {
        var one = '9090';
        expect(one.hasVowels()).toBeFalsy();
      });
      it('Should return false for an empty string', function() {
        var one = ' ';
        expect(one.hasVowels()).toBeFalsy();
      });
      it('Should have a return type of \'boolean\'', function() {
        var one = 'abc';
        expect(typeof one.hasVowels()).toBe('boolean');
      });
    });

    describe('Should convert characters to UPPER CASE', function() {
      it('Should return \'SHESHE\' for \'Sheshe\'', function() {
        var one = 'Sheshe';
        expect(one.toUpper()).toBe('SHESHE');
      });
      it('Should return \'SHSH\' for \'Shsh\'', function() {
        var two = 'Shsh';
        expect(two.toUpper()).toBe('SHSH');
      });
      it('Should return \'GERTIE 234 SHESHE\' for \'gertie 234 sheshe\'', function() {
        var two = 'gertie 234 sheshe';
        expect(two.toUpper()).toBe('GERTIE 234 SHESHE');
      });
      it('Should return \'1234?\' for \'1234?\'', function() {
        var one = '1234?';
        expect(one.toUpper()).toBe('1234?');
      });
      it('Should return empty string for empty string', function() {
        var one = ' ';
        expect(one.toUpper()).toBe(' ');
      });
      it('Should have a return type of \'string\'', function() {
        var one = 'kenya';
        expect(typeof one.toUpper()).toBe('string');
      });
    });

    describe('Should convert CHARACTERS to lower case', function() {
      it('Should return \'one 4 one\' for \'ONE 4 ONE\'', function() {
        var one = 'ONE 4 ONE';
        expect(one.toLower()).toBe('one 4 one');
      });
      it('Should return \'123four\' for \'123Four\'', function() {
        var one = '123Four';
        expect(one.toLower()).toBe('123four');
      });
      it('Should return \'what? how? when?\' for \'What? How? When?\'', function() {
        var two = 'What? How? When?';
        expect(two.toLower()).toBe('what? how? when?');
      });
      it('Should return empty string for empty string', function() {
        var one = ' ';
        expect(one.toLower()).toBe(' ');
      });
      it('Should return \'1234?\' for \'1234?\'', function() {
        var one = '1234?';
        expect(one.toLower()).toBe('1234?');
      });
      it('Should have a return type of \'string\'', function() {
        var one = 'Kenya';
        expect(typeof one.toLower()).toBe('string');
      });
    });

    describe('Should return the first character of the string in upper case', function() {
      it('Should return \'fave\' for \'Fave\'', function() {
        var one = 'fave';
        expect(one.ucFirst()).toBe('Fave');
      });
      it('Should return \'Trim3\' for \'trim3\'', function() {
        var two = 'trim3';
        expect(two.ucFirst()).toBe('Trim3');
      });
      it('Should return \'Biscuit\' for \'Biscuit\'', function() {
        var one = 'Biscuit';
        expect(one.ucFirst()).toBe('Biscuit');
      });
      it('Should return a number if the first character of the string is a number', function() {
        var one = '7ello hello';
        expect(one.ucFirst()).toBe('7ello hello');
      });
      it('Should return \'_Andela\' for \'_Andela\'', function() {
        var one = '_Andela';
        expect(one.ucFirst()).toBe('_Andela');
      });
      it('Should ignore an empty space at the front', function() {
        var one = ' this is Andela';
        expect(one.ucFirst()).toBe('This is Andela');
      });
      it('Should have a return type of \'string\'', function() {
        var one = 'WIT';
        expect(typeof one.ucFirst()).toBe('string');
      });
    });

    describe('Should return true/false for whether a string is a question', function() {
      it('Should return true for \'To be or not to be?\'', function() {
        var one = 'To be or not to be?';
        expect(one.isQuestion()).toBeTruthy();
      });
      it('Should return false for \'Merchant of Venice\'', function() {
        var two = 'Merchant of Venice';
        expect(two.isQuestion()).toBeFalsy();
      });
      it('Should have a return type of \'boolean\'', function() {
        var one = 'Mandela';
        expect(typeof one.isQuestion()).toBe('boolean');
      });
    });

    describe('Should return a list of the words in the String instance in an array', function() {
      it('Should remove anything that is not a letter. Return [\'kiok\'] for \'12344, kiok?, 90, ^%$#@\'', function() {
        var one = '12344, kiok?, 90, ^%$#@';
        expect(one.word()).toEqual(['kiok']);
      });
      it('Should return an empty array if the string is a non-letter', function() {
        var one = '12344,';
        expect(one.word()).toEqual([]);
      });
      it('Should return an empty array for \'8\'', function() {
        var one = '8';
        expect(one.word()).toEqual([]);
      });
      it('Should return [\'jk\'] for \'344jk35\'', function() {
        var one = '344jk35';
        expect(one.word()).toEqual(['jk']);
      });
      it('Should return [\'I\', \'am\',] for \'I am 24\'', function() {
        var one = 'I am 24';
        expect(one.word()).toEqual(['I', 'am']);
      });
      it('The return type should be an instance of an Array', function() {
        var one = 'Hello world';
        expect(Array.isArray(one.word())).toBeTruthy();
      });
      it('Should expect the return type to be an \'object\'', function() {
        var one = 'Coffee Script';
        expect(typeof one.word()).toBe('object');
      });
    });

    describe('Should return the number of words in the String instance', function() {
      it('Should return 3 for \'This is Andela\'', function() {
        var one = 'This is Andela';
        expect(one.wordCount()).toBe(3);
      });
      it('Should return 3 for \'THIS, IS, ANDELA\'', function() {
        var one = 'THIS IS ANDELA';
        expect(one.wordCount()).toBe(3);
      });
      it('Should return 1 for \'+254 === home\'', function() {
        var one = '+254 === home';
        expect(one.wordCount()).toBe(1);
      });
      it('Should return 0 for an empty string', function() {
        var one = '';
        expect(one.wordCount()).toBe(0);
      });
      it('Should return 0 for \'+254\'', function() {
        var one = '+254';
        expect(one.wordCount()).toBe(0);
      });
      it('Should return 0 for \'??? *** @@@\'', function() {
        var one = '??? *** @@@';
        expect(one.wordCount()).toBe(0);
      });
      it('Should have a return type of \'number\'', function() {
        var one = 'The Mall';
        expect(typeof one.wordCount()).toBe('number');
      });
    });

    describe('Returns a currency representation of the String', function() {
      it('Should return \'98.98\' for \'98.98\'', function() {
        var one = '98.89';
        expect(one.toCurrency()).toBe('98.89');
      });
      it('Should return \'980.98\' for \'980.98\'', function() {
        var one = '980.98';
        expect(one.toCurrency()).toBe('980.98');
      });
      it('Should return \'980.98\' for \'980.982222\'', function() {
        var one = '980.982222';
        expect(one.toCurrency()).toBe('980.98');
      });
      it('Should return \'980,980.90\' for \'980980.9822', function() {
        var one = '980980.9822';
        expect(one.toCurrency()).toBe('980,980.98');
      });
      it('Should return \'980.98\' for \'9a8b0c.98\'', function() {
        var one = '9a8b0c.98';
        expect(one.toCurrency()).toBe('980.98');
      });
      it('Should return \'4,500.00\' for \'4500\'', function() {
        var one = '4500';
        expect(one.toCurrency()).toBe('4,500.00');
      });
      it('Should have a return type of \'string\'', function() {
        var one = '2000';
        expect(typeof one.toCurrency()).toBe('string');
      });
    });

    describe('Should return a Number representation of the Currency String', function() {
      it('Should return 2254.25 for \'2,254.25\'', function() {
        var one = '2,254.25';
        expect(one.fromCurrency()).toBe(2254.25);
      });
      it('Should return 12.57 for \'12.567\'', function() {
        var one = '12.567';
        expect(one.fromCurrency()).toBe(12.57);
      });
      it('Should have a return type of \'number\'', function() {
        var one = '12.34';
        expect(typeof one.fromCurrency()).toBe('number');
      });
    });
  });
})();
