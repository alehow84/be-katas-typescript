const formatAlbums = (albums, artistIds) => {
  const updatedAlbums = albums.map((album) => {
    return { ...album };
  });

  updatedAlbums.forEach((album) => {
    let artistID = null;
    let artistIDArr = Object.keys(artistIds).filter(
      (key) => album.artist === key
    );
    artistID = artistIDArr[0];
    album.artist = artistIds[artistID];
  });

  return updatedAlbums;
};

module.exports = formatAlbums;
