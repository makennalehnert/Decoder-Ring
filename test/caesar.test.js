
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// Write your tests here!

describe("caesar", () => {
   describe("error handling", () => { 
    it("should return false if the shift value is equal to 0", () => {
        const input = "Hello World"
        const shift = 0;
        const actual = caesar(input,shift);

        expect(actual).to.be.false;
    })
    it("should return false if the shift value is above 25", () => {
        const input = "Hello World"
        const shift = 26;
        const actual = caesar(input, shift);

        expect(actual).to.be.false;
    })
    it("should return false if the shift value is less than -25", () => {
        const input = "Hello World"
        const shift = -26;
        const actual = caesar(input, shift);

        expect(actual).to.be.false;
    })
    it("should return false if no shift value is given", () => {
        const input = "Hello World"
        const actual = caesar(input);

        expect(actual).to.be.false;
    })
}) 
    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            const input = "hello"
            const shift = 4;
            const actual = caesar(input, shift);
            const expected = "lipps"
            
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const input = "Hi"
            const shift = 2;
            const actual = caesar(input,shift);
            const expected = 'jk'
            expect(actual).to.equal(expected);
        })
        it("should handle shifts that go past the alphabet by wrapping around", () => {
            const input = 'zc'
            const shift = 2;
            const actual = caesar(input,shift);
            const expected = 'be'
            expect(actual).to.equal(expected);
        })
        it("should maintains spaces and other nonalphabetic symbols", () => {
            const input = 'a b';
            const shift = 3;
            const actual = caesar(input,shift);
            const expected = 'd e'
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding a message", () => {
        it("should maintains spaces and other nonalphabetic symbols", () => {
            const input = 'd e';
            const shift = -3;
            const actual = caesar(input,shift);
            const expected = 'a b'
            expect(actual).to.equal(expected);
        })
    })

})

