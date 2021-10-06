// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    let results = "";
    const lowCase = input.toLowerCase();

    if (shift === 0 || shift == null || shift > 25 || shift < -25) {
      return false;
    }

    if (encode === false) {
      shift = shift * -1;
    }

    for (let i = 0; i < lowCase.length; i++) {
      let char = lowCase[i];

      if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
        let numCode = lowCase.charCodeAt(i) + shift;
        if (numCode > 122) {
          numCode -= 26;
        }
        if (numCode < 97) {
          numCode += 26;
        }
        let newLetter = String.fromCharCode(numCode);
        results += newLetter;
      } else {
        results += char;
      }
    }
    console.log(results);
    return results;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

