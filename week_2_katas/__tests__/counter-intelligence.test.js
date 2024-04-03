const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('returns a string', () => {
    const input = 'Y';
    const actualOutput = counterIntelligence(input);

    expect(typeof actualOutput).toBe('string');
  });
  it('returns the correct string when the encrypted msg has been shifted by 1 character and is only 1 character long', () => {
    const input = 'Y';
    const actualOutput = counterIntelligence(input);
    const expectedOutput = 'X';

    expect(actualOutput).toBe(expectedOutput);
  });
  it('returns the correct string when the encrypted msg has been shifted by 1 character and has multiple characters', () => {
    const input = 'BCD Y';
    const actualOutput = counterIntelligence(input);
    const expectedOutput = 'ABC X';

    expect(actualOutput).toBe(expectedOutput);
  });
  it('returns the correct string when the encrypted msg has been shifted by any character and has multiple characters', () => {
    const input = 'NKRRU YCKKZNKGXZ D';
    const actualOutput = counterIntelligence(input);
    const expectedOutput = 'HELLO SWEETHEART X';

    expect(actualOutput).toBe(expectedOutput);
  });
});
