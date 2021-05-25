function palindromeChecker(word: string): boolean {
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
  }
describe("palindromeChecker", () => {
    it("should return true for palindrome", () => {
        expect(palindromeChecker("tacocat")).toBeTruthy();
        expect(palindromeChecker("racecar")).toBeTruthy();
        expect(palindromeChecker("mom")).toBeTruthy();
    })
    it("should return false for palindrome", () => {
        expect(palindromeChecker("wonder")).toBeFalsy();
        expect(palindromeChecker("school")).toBeFalsy();
        expect(palindromeChecker("bottle")).toBeFalsy();
    })
})













