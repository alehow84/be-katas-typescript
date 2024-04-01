const formatAlbums = require('../format-albums.js');

describe('formatAlbums', () => {
  it('Should return a new array of Album objects with the artist ID as the value for the artist key without mutating the input', () => {
    const albums = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];

    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };

    formatAlbums(albums, artistIdReference);

    expect(albums).toEqual([
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ]);
    expect(formatAlbums(albums, artistIdReference)).toEqual([
      { name: 'Grammatics', artist: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 324, releaseYear: 2009 }
    ]);
  });
});
