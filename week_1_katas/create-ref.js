/**
 Create a function called createRef that can convert an array of people into a reference object that can be used to look up a person's phone number from their name.


 - Access what the first key is in a person object in the people array
 - give another random 
 */

const createRef = (infoArr, keyName = '', valueName = '') => {
  const detailsObj = {};
  let key = '';

  infoArr.forEach((item) => {
    console.log(item, 'item');
    if (keyName.length === 0) {
      key = item[Object.keys(item)[0]];
      valueName = Object.keys(item)[1];
      detailsObj[key] = item[valueName];
    } else {
      key = item[keyName];
      detailsObj[key] = item[valueName];
    }
  });
  console.log(detailsObj, 'detailsObj');
  return detailsObj;
};

module.exports = createRef;
