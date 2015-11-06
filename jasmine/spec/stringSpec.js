describe("Prototypal methods of the String class", function() {
  describe("Should return true if string has vowels", function() {
    it("Should return true for 'Sheshe' ", function() {
      var one = "Sheshe";
      expect(one.hasVowels()).toBe(true);
    });
    it("Should return true for 'my nAme' ", function() {
      var three = "my nAme";
      expect(three.hasVowels()).toBe(true);
    });
    it("Should return false for 'shy my' ", function() {
      var two = "shy my";
      expect(two.hasVowels()).toBe(false);
    });
    it("Should return false for 'zzz' ", function() {
      var four = "zzz";
      expect(four.hasVowels()).toBe(false);
    });
  });

  describe("Should convert characters to UPPER CASE", function() {
    it("Should return SHESHE for Sheshe", function() {
      var one = "sheshe";
      expect(one.toUpper()).toBe("SHESHE");
    });
    it("Should return SHSH for Shsh", function() {
      var two = "shsh"
      expect(two.toUpper()).toBe("SHSH");
    });
    it("Should return GERTIE 234 SHESHE for gertie 234 sheshe", function() {
      var two = "gertie 234 sheshe"
      expect(two.toUpper()).toBe("GERTIE 234 SHESHE");
    });
  });

  describe("Should convert CHARACTERS to lower case", function() {
    it("Should return one 4 one for ONE 4 ONE", function() {
      var one = "ONE 4 ONE";
      expect(one.toLower()).toBe("one 4 one");
    });
    it("Should return what? how? when? for What? How? When?", function() {
      var two = "What? How? When?";
      expect(two.toLower()).toBe("what? how? when?");
    });
  });

  describe("Should count the number of words in a string", function() {
    it("Should return 5 for the d0j0", function() {
      var one = "the d0j0";
      expect(one.wordCount()).toBe(5);
    });
    it("Should return 6 for Am I 4 yrs?", function() {
      var two = "Am I 4 yrs?";
      expect(two.wordCount()).toBe(6);
    });
  });
});
