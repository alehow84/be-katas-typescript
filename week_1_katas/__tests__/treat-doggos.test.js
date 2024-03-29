const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  it('should return an array of objects with a different reference to the starting array of objects ', () => {
    const startArrDogs = [{ name: 'Otis', age: 3, hasRabies: true }];

    expect(treatDoggos(startArrDogs)).not.toBe(startArrDogs);
    expect(typeof treatDoggos(startArrDogs)).toBe('array');
  });
});
