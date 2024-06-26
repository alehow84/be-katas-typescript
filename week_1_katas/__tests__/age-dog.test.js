const ageDog = require('../age-dog.js');

/*
This function will take a single dog object with an age property and a number. You should increment the age property by the provided number and return the aged dog. The original dog object must not be mutated!

- solve problem in js
-refactor using typescript
*/

describe('ageDog', () => {
  it('Should return an object that does not mutate the passed object', () => {
    const startDog = { name: 'Milo', age: 2 };

    expect(startDog).not.toBe(ageDog(startDog, 1));
    expect(typeof ageDog(startDog, 1)).toBe('object');
  });
  it('should return an object with the age property incremented by the given number argument', () => {
    const startDog = { name: 'Milo', age: 2 };

    expect(ageDog(startDog, 3)).toEqual({ name: 'Milo', age: 5 });
  });
});
