/**
 Create a function called createRef that can convert an array of people into a reference object that can be used to look up a person's phone number from their name.


 - Access what the first key is in a person object in the people array
 - give another random 
 */

const createRef = (infoArr, keyName = '', valueName = '') => {
  //   console.log(keyName.length, 'keyName', typeof keyName);
  //   const key = keyName;
  //   console.log(key, 'key', valueName, 'valueName', infoArr, 'infoArr');

  //   keyName = Object.keys(infoArr),
  //   valueName = Object.keys(infoArr[0])

  console.log(infoArr, 'infoArr', Object.keys(infoArr), 'trying something');

  const detailsObj = {};

  infoArr.forEach((item) => {
    console.log(item, 'item');
    if (keyName.length === 0) {
      keyName = Object.keys(item)[0];
      valueName = Object.keys(item)[1];
      detailsObj[keyName] = item[valueName];
    } else {
      detailsObj[keyName] = item[valueName];
    }
  });
  console.log(detailsObj, 'detailsObj');
  return detailsObj;
};

module.exports = createRef;
