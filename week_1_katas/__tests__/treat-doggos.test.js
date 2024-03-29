const { start } = require('repl');
const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  it('should return an array of objects ', () => {
    const startArrDogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    expect(treatDoggos(startArrDogs)[0]).toMatchObject({
      name: 'Otis',
      age: 3,
      hasRabies: expect.any(Boolean)
    });
  });
  it('should return an array of dog objects with the boolean value flipped where there is only one dog object', () => {
    const startArrDogs = [{ name: 'Otis', age: 3, hasRabies: true }];

    expect(treatDoggos(startArrDogs)[0].hasRabies).toBe(false);
  });
  it('should return an array of dog objects with each of their boolean values flipped where there are multiple dog objects', () => {
    const startArrDogs = [
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Matilda', age: 11, hasRabies: false },
      { name: 'Milo', age: 3, hasRabies: false }
    ];
    expect(treatDoggos(startArrDogs)).toMatchObject([
      { name: 'Otis', age: 3, hasRabies: false },
      { name: 'Matilda', age: 11, hasRabies: true },
      { name: 'Milo', age: 3, hasRabies: true }
    ]);
  });
  it('invoking the function should not mutate the starting array', () => {
    const startArrDogs = [
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Matilda', age: 11, hasRabies: false },
      { name: 'Milo', age: 3, hasRabies: false }
    ];

    treatDoggos(startArrDogs);
    expect(startArrDogs).toEqual([
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Matilda', age: 11, hasRabies: false },
      { name: 'Milo', age: 3, hasRabies: false }
    ]);
  });
});
