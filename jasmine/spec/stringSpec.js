describe("Prototypal methods of the String class", function() {
  var one = "Sheshe";
  var two = "Shsh";
  describe("Should return true if string has vowels", function() {
    it("Should return true if string contains 'a'", function() {
      expect(one.hasVowels()).toBe(true);
      expect(two.hasVowels()).toBe(false);
    });
  });

  describe("Should convert characters to upper case", function() {
    it("Should return SHESHE for Sheshe", function() {
      expect(one.toUpper()).toBe("SHESHE");
    });
    it("Should return SHSH for Shsh", function() {
      expect(two.toUpper()).toBe("SHSH");
    });
  });

  describe("Should convert characters to lower case", function() {
    it("Should return sheshe for Sheshe", function() {
      expect(one.toLower()).toBe("sheshe");
    });
    it("Should return shsh for Shsh", function() {
    });
  });

  describe("Should ")
});