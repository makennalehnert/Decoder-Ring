

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
    describe("encoding a message", () => {
        it("should return a string", () => {
            const input = 'hi';
            const actual = polybius(input, encode=true);
            const expected = '3242'
            expect(actual).to.equal(expected);
        })
        it("should encode both i and j to 42", () => {
            const input = 'ji';
            const actual = polybius(input, encode = true);
            const expected = '4242'
            expect(actual).to.equal(expected);
        })
        it("should keep spaces as is", () => {
            const input = 'it is';
            const actual = polybius(input, encode=true);
            const expected = '4244 4234'
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const input = 'Hh';
            const actual = polybius(input, encode=true)
            const expected = '3232'
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding a message", () => {
        it("should translate 42 to (i/j)", () => {
            const input = '42';
            const actual = polybius(input, encode=false)
            const expected = '(i/j)'
            expect(actual).to.equal(expected);
        })
        it("should keep spaces as is", () => {
            const input = '21 15';
            const actual = polybius(input, encode=false);
            const expected = 'b v'
            expect(actual).to.equal(expected);
        })
    })
})
