// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let doesRepeat = /(.).*\1/.test(alphabet)
    if (doesRepeat) return false
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false
    const alph = alphabet.split("")
    const letterArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]

    function translate(libA, libB) {
      let result = ""
      let message = input.toLowerCase()
      for (let text = 0; text < message.length; text++) {
        let letter = message[text]
        if (letter.match(/[^ ]/)) {

          let num = libA.indexOf(letter)
          result += libB[num]
        } else {
          result += letter
        }
      }
      return result
    }
    if (encode) {
      let final = translate(letterArr, alph)
      return final
    } else {
      let final = translate(alph, letterArr)
      return final
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
