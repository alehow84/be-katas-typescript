/**
 Create a function called createRef that can convert an array of people into a reference object that can be used to look up a person's phone number from their name.
 */

const createRef = (people) => {
  const phoneNumsObj = {};

  people.forEach((person) => {
    phoneNumsObj[person.name] = person.phoneNumber;
  });

  return phoneNumsObj;
};

module.exports = createRef;
