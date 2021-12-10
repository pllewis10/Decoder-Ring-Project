// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const numArr = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const letterArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
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
    ];
    if (encode) {
      let result = ""
      let message = input.toLowerCase()
      for (let text = 0; text < message.length; text++) {
        let letter = message[text]
        if (letter.match(/[a-z]/)) {
          if (letter === "i" || letter === "j") {
            result += "42"
          } else {
            let num = letterArr.indexOf(letter)
            result += numArr[num]
          }
        } else {
          result += letter
        }
      }
      return result
    } else {
      let messageArr = input.split(" ")
      let lettersArr = []
      for (word of messageArr) {
        lettersArr.push(word.match(/.{2}/g))
      }
      let isEven = messageArr.every((word) => word.length % 2 === 0)

      if (!isEven) {
        return false
      }
      let finalArr = []
      for (word of lettersArr) {
        let tempArr = []
        for (letter of word) {
          if (letter === "42") {
            tempArr.push("(i/j)")
          } else {
            let num = numArr.indexOf(letter)
            let something = letterArr[num]
            tempArr.push(something)
          }
        }
        finalArr.push(tempArr)
      }
      let decodedArr = []
      for (word of finalArr) {
        let val = word.join("")
        decodedArr.push(val)
      }
      let final = decodedArr.join(" ")
      return final
    }
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
