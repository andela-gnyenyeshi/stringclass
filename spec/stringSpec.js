(function() {
  'use strict';
  describe('Prototypal methods of the String class', function() {
    describe('Should return true if string has vowels', function() {
      it('Should return true for \'Sheshe\'', function() {
        expect('Sheshe'.hasVowels()).toBeTruthy();
      });
      it('Should return true for \'my nAme\'', function() {
        expect('my nAmE'.hasVowels()).toBeTruthy();
      });
      it('Should return false for \'shy my\'', function() {
        expect('shy my'.hasVowels()).toBeFalsy();
      });
      it('Should return false for \'zzz\'', function() {
        expect('zzz'.hasVowels()).toBeFalsy();
      });
      it('Should return false for \'9090\'', function() {
        expect('9090'.hasVowels()).toBeFalsy();
      });
      it('Should return false for an empty string', function() {
        expect(''.hasVowels()).toBeFalsy();
      });
      it('Should have a return type of \'boolean\'', function() {
        expect(typeof 'one'.hasVowels()).toBe('boolean');
      });
    });

    describe('Should convert characters to UPPER CASE', function() {
      it('Should return \'SHESHE\' for \'Sheshe\'', function() {
        expect('Sheshe'.toUpper()).toBe('SHESHE');
      });
      it('Should return \'SHSH\' for \'Shsh\'', function() {
        expect('Shsh'.toUpper()).toBe('SHSH');
      });
      it('Should return \'GERTIE 234 SHESHE\' for \'gertie 234 sheshe\'', function() {
        expect('gertie 234 sheshe'.toUpper()).toBe('GERTIE 234 SHESHE');
      });
      it('Should return \'1234?\' for \'1234?\'', function() {
        expect('1234?'.toUpper()).toBe('1234?');
      });
      it('Should return empty string for empty string', function() {
        expect(' '.toUpper()).toBe(' ');
      });
      it('Should have a return type of \'string\'', function() {
        expect(typeof 'kenya'.toUpper()).toBe('string');
      });
    });

    describe('Should convert CHARACTERS to lower case', function() {
      it('Should return \'one 4 one\' for \'ONE 4 ONE\'', function() {
        expect('ONE 4 ONE'.toLower()).toBe('one 4 one');
      });
      it('Should return \'123four\' for \'123Four\'', function() {
        expect('123Four'.toLower()).toBe('123four');
      });
      it('Should return \'what? how? when?\' for \'What? How? When?\'', function() {
        expect('What? How? When?'.toLower()).toBe('what? how? when?');
      });
      it('Should return empty string for empty string', function() {
        expect(' '.toLower()).toBe(' ');
      });
      it('Should return \'1234?\' for \'1234?\'', function() {
        expect('1234?'.toLower()).toBe('1234?');
      });
      it('Should have a return type of \'string\'', function() {
        expect(typeof 'Kenya'.toLower()).toBe('string');
      });
    });

    describe('Should return the first character of the string in upper case', function() {
      it('Should return \'fave\' for \'Fave\'', function() {
        expect('fave'.ucFirst()).toBe('Fave');
      });
      it('Should return \'Trim3\' for \'trim3\'', function() {
        expect('trim3'.ucFirst()).toBe('Trim3');
      });
      it('Should return \'Biscuit\' for \'Biscuit\'', function() {
        expect('Biscuit'.ucFirst()).toBe('Biscuit');
      });
      it('Should return the number and capitalize the first character if the first character of the string is a number', function() {
        expect('7ello hello'.ucFirst()).toBe('7Ello hello');
      });
      it('Should return \'_Andela\' for \'_Andela\'', function() {
        expect('_Andela'.ucFirst()).toBe('_Andela');
      });
      it('Should ignore an empty space at the front', function() {
        expect(' this is andela'.ucFirst()).toBe(' This is andela');
      });
      it('Should have a return type of \'string\'', function() {
        expect(typeof 'WIT'.ucFirst()).toBe('string');
      });
    });

    describe('Should return true/false for whether a string is a question', function() {
      it('Should return true for \'To be or not to be?\'', function() {
        expect('To be or not to be?'.isQuestion()).toBeTruthy();
      });
      it('Should return false for \'Merchant of Venice\'', function() {
        expect('Merchant of Venice'.isQuestion()).toBeFalsy();
      });
      it('Should have a return type of \'boolean\'', function() {
        expect(typeof 'Mandela'.isQuestion()).toBe('boolean');
      });
    });

    describe('Should return a list of the words in the String instance in an array', function() {
      it('Should remove anything that is not a letter. Return [\'kiok\'] for \'12344, kiok?, 90, ^%$#@\'', function() {
        expect('12344, kiok?, 90, ^%$#@'.word()).toEqual(['kiok']);
      });
      it('Should return an empty array if the string is a non-letter', function() {
        expect('12344,'.word()).toEqual([]);
      });
      it('Should return an empty array for \'8\'', function() {
        expect('8'.word()).toEqual([]);
      });
      it('Should return [\'jk\'] for \'344jk35\'', function() {
        expect('344jk35'.word()).toEqual(['jk']);
      });
      it('Should return [\'I\', \'am\',] for \'I am 24\'', function() {
        expect('I am 24'.word()).toEqual(['I', 'am']);
      });
      it('The return type should be an instance of an Array', function() {
        expect(Array.isArray('Hello world'.word())).toBeTruthy();
      });
      it('Should expect the return type to be an \'object\'', function() {
        expect(typeof 'Coffee Script'.word()).toBe('object');
      });
    });

    describe('Should return the number of words in the String instance', function() {
      it('Should return 3 for \'This is Andela\'', function() {
        expect('This is Andela'.wordCount()).toBe(3);
      });
      it('Should return 3 for \'THIS, IS, ANDELA\'', function() {
        expect('THIS IS ANDELA'.wordCount()).toBe(3);
      });
      it('Should return 1 for \'+254 === home\'', function() {
        expect('+254 === home'.wordCount()).toBe(1);
      });
      it('Should return 0 for an empty string', function() {
        expect(''.wordCount()).toBe(0);
      });
      it('Should return 0 for \'+254\'', function() {
        expect('+254'.wordCount()).toBe(0);
      });
      it('Should return 0 for \'??? *** @@@\'', function() {
        expect('??? *** @@@'.wordCount()).toBe(0);
      });
      it('Should have a return type of \'number\'', function() {
        expect(typeof 'The Mall'.wordCount()).toBe('number');
      });
    });

    describe('Returns a currency representation of the String', function() {
      it('Should return \'98.98\' for \'98.98\'', function() {
        expect('98.89'.toCurrency()).toBe('98.89');
      });
      it('Should return \'980.98\' for \'980.98\'', function() {
        expect('980.98'.toCurrency()).toBe('980.98');
      });
      it('Should return \'980.98\' for \'980.982222\'', function() {
        expect('980.982222'.toCurrency()).toBe('980.98');
      });
      it('Should return \'980,980.90\' for \'980980.9822', function() {
        expect('980980.9822'.toCurrency()).toBe('980,980.98');
      });
      it('Should return \'980.98\' for \'9a8b0c.98\'', function() {
        expect('9a8b0c.98'.toCurrency()).toBe('980.98');
      });
      it('Should return \'4,500.00\' for \'4500\'', function() {
        expect('4500'.toCurrency()).toBe('4,500.00');
      });
      it('Should have a return type of \'string\'', function() {
        expect(typeof '2000'.toCurrency()).toBe('string');
      });
    });

    describe('Should return a Number representation of the Currency String', function() {
      it('Should return 2254.25 for \'2,254.25\'', function() {
        expect('2,254.25'.fromCurrency()).toBe(2254.25);
      });
      it('Should return 12.57 for \'12.567\'', function() {
        expect('12.567'.fromCurrency()).toBe(12.57);
      });
      it('Should have a return type of \'number\'', function() {
        expect(typeof '12.34'.fromCurrency()).toBe('number');
      });
    });
  });
})();
