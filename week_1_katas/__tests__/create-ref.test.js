const createRef = require('../create-ref.js');

describe('createRef', () => {
  it('function returns a new object', () => {
    const startArr = [
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];

    expect(createRef(startArr)).not.toBe(startArr);
    expect(typeof createRef(startArr)).toBe('object');
  });
  it('should return an object each key matches the name value of the person object, and the corresponding value matches the phoneNumber key', () => {
    const startArr = [
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];

    const expectedObj = {
      vel: '01134445566',
      ant: '01612223344',
      mitch: '07777777777'
    };

    expect(createRef(startArr)).toEqual(expectedObj);
  });
});
