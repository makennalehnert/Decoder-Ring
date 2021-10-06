// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() function test", () => {
    describe("error handling", () => {
        it("should return false if the given alphabet isn't 26 characters long", () => {
            const input = "hi";
            const alphabet = "asnkj"
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if there are duplicate characters in the alphabet", () => {
            const input = 'hello';
            const alphabet = 'aasbhjsssjfkvmdngkkdnggrdk'
            const actual = substitution(input,alphabet);
            expect(actual).to.be.false;
        })
    })
    describe("encoding a message", () => {
        it("should correctly translate the input based on the alphabet given", () => {
            const input = "abe"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const actual = substitution(input,alphabet)
            const expected = "qwt"
            expect(actual).to.equal(expected);
        })
        it("should maintain spaces", () => {
            const input = "ac a"
            const alphabet = "poiuytrewqasdfghjklmnbvcxz"
            const actual = substitution(input,alphabet)
            const expected = "pi p"
            expect(actual).to.equal(expected);
        })
        it("should ignore capitals", () => {
            const input = "ABc";
            const alphabet = "zxcvbnmasdfghjklpoiuytrewq"
            const actual = substitution(input,alphabet)
            const expected = "zxc"
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding a message", () => {
        it("should maintain spaces", () => {
            const input = "qw e"
            const alphabet = "qwertyuiopasdfghjklmnbvcxz"
            const actual = substitution(input,alphabet,false)
            const expected = 'ab c';
            expect(actual).to.equal(expected);
        })
    })
})