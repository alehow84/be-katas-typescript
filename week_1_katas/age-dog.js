/*
This function will take a single dog object with an age property and a number. You should increment the age property by the provided number and return the aged dog. The original dog object must not be mutated!

- solve problem in js
-refactor using typescript
*/

const ageDog = (dog, num) => {
  const copyDog = { ...dog };

  copyDog.age += num;

  return copyDog;
};

module.exports = ageDog;
