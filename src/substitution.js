// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //error handling
    if (!alphabet || alphabet.length != 26) {
      return false;
    }

    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] == alphabet[j]) {
          return false;
        }
      }
    }

    // declaring variables

    //encoding
    let results = [];
    if ((encode == true)) {
      let message = input.toLowerCase().split("");
      let realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let subAlphabet = alphabet.toLowerCase().split("");
      for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
          let ind = realAlphabet.indexOf(letter);

          let newLetter = subAlphabet[ind];
          results.push(newLetter);
        } else {
          results.push(letter);
        }
      }
      let result = results.join("").toString();

      return result;
    }

    //decoding
    let resultsDecode = [];
    if ((encode == false)) {
      let message = input.toLowerCase().split("");
      let realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let subAlphabet = alphabet.toLowerCase().split("");
      for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        if (letter.charCodeAt() != 32) {
          let ind = subAlphabet.indexOf(letter);

          let newLetter = realAlphabet[ind];
          resultsDecode.push(newLetter);
        } else {
          resultsDecode.push(letter);
        }
      }
      let resultDecode = resultsDecode.join("").toString();
      console.log(resultDecode);
      return resultDecode;
    }
    
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
