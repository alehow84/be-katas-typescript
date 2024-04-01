const createRef = (infoArr, keyName = '', valueName = '') => {
  const detailsObj = {};
  let key = '';

  infoArr.forEach((item) => {
    if (keyName.length === 0) {
      key = item[Object.keys(item)[0]];
      valueName = Object.keys(item)[1];
      detailsObj[key] = item[valueName];
    } else {
      key = item[keyName];
      detailsObj[key] = item[valueName];
    }
  });
  return detailsObj;
};

module.exports = createRef;
