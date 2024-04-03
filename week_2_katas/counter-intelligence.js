const counterIntelligence = (str) => {
  const alphaCharArr = Array.from(Array(26)).map((e, i) => i + 65);
  const lastCharsCode = str.charCodeAt(str.length - 1);
  //88 is index 23
  //below gets the last characters index
  const lastCharIndex = alphaCharArr.indexOf(lastCharsCode);
  console.log(lastCharIndex, 'lastCharIndex');
  //charShift is how much the character has shifted bby

  // console.log(alphaCharArr);

  //find index change between x and the letter
  let charIndexShift = 23 - lastCharIndex;
  console.log(charIndexShift, 'charIndexShift');

  //need to find the index of each character in the array
  //minus the charIndexShift of it to find the index of the actual character code
  //convert it back into a character and return it
  const strArr = str.split('');
  const decodedStrArr = strArr.map((letter) => {
    if (letter === ' ') {
      return letter;
    } else {
      //finding the letter index in the string ive just turned into an array
      const letterIndex = strArr.indexOf(letter);
      //gets the number representing the
      let letterCode = strArr.join('').charCodeAt(letterIndex);
      // console.log(letterCode, 'letterCode');

      let currentLetterAlphaCharIndex = alphaCharArr.indexOf(letterCode);

      console.log(currentLetterAlphaCharIndex, 'index');

      currentLetterAlphaCharIndex += charIndexShift;
      //incorrect - need to find a way to shift the index number along through a range of 0-25

      function range(start, end) {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      }

      function rotateArray(arr, shiftAmount) {
        const amount = shiftAmount % arr.length;
        return [...arr.slice(amount), ...arr.slice(0, amount)];
      }

      const startRange = range(0, 25);
      const rotatedRange = rotateArray(startRange, charIndexShift);
      const codedIndex = startRange.indexOf(currentLetterAlphaCharIndex);
      const decodedIndex = rotatedRange[codedIndex];
      console.log(codedIndex, 'CodedIndex', decodedIndex, 'decodedIndex');

      letter = String.fromCharCode(alphaCharArr[currentLetterAlphaCharIndex]);
      // letter = String.fromCharCode(alphaCharArr[decodedIndex]);
      //line 52 fails 3rd test, above on line 53 is almost working - think there is something wrong with how i am trying to calculatr how much to shift by (line 13)

      return letter;
    }
  });

  return decodedStrArr.join('');
};

module.exports = { counterIntelligence };
