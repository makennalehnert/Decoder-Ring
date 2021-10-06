// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encoding = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };
  const decoding = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "(i/j)",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
    " ":" "
  };
  function polybius(input, encode = true) {
    let results = "";
    let decodeResult = "";
    let str = input.toLowerCase();
    if (encode) {
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
          results += encoding[char];
        } else {
          results += char;
        }
      }
      return results;
    }
    if (!encode) {
      let findLength = str.split(" ").join("");
      if (findLength.length % 2 === 1) {
        return false;
      }
      for (let i = 0; i < str.length; i = i + 2) {
        let num = str[i];
        let numTwo = str[i + 1];
        if (num == " ") {
          results = " ";
          i = i - 1;
        } else {
          results = `${num}${numTwo}`;
        }
        decodeResult += decoding[results];
      }
    }

    return decodeResult;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
