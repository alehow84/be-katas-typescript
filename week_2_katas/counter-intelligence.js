const counterIntelligence = (str) => {
  const lastCharsCode = str.charCodeAt(str.length-1)
  // console.log(lastCharsCode, 'lastCharsCode on line 3')
  let charShift = 88 - lastCharsCode
  // console.log(charShift,'charShift on line 4')
  const strArr = str.split('')
  const decodedStrArr = strArr.map((letter)=>{
    if (letter === ' ') {
      return letter
    } else {
    const letterIndex = strArr.indexOf(letter)
    let letterCode = strArr.join('').charCodeAt(letterIndex)
    if(charShift < 0) {
    letterCode+= charShift 
    letter = String.fromCharCode(letterCode)
    return letter
    } else {
      // console.log(letter, letterCode, charShift, String.fromCharCode(letterCode - charShift), 'letterCode on line 18')
      /*
      something is wrong here, so far for the last test, the X returns as expected, but the difference between the expected char codes and the received char codes is 26. Confused!
      */
      letterCode = letterCode + charShift
      console.log(letterCode, 'letterCode on line 20')
      letter = String.fromCharCode(letterCode)
      return letter
    }
    }
    
  })
  return decodedStrArr.join('')
  
  
};

module.exports = { counterIntelligence };
