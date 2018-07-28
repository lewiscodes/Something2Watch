export function getGenreIdsFromObject(genreObject) {
  if (genreObject) {
    let id = '';

    genreObject.map((genre) => {
      id = `${genre.id},${id}`;
      return true;
    });

    id = id.substring(0, id.length - 1);
    return id;
  }
}

export function getResultIDs (resultIds) {
  let ids = [];

  for (let x=0; x < Object.keys(resultIds).length; x++) {
    ids.push(resultIds[x].id);
  }

  return ids;
}

export function compare(a, b) {
  if (isNaN(parseInt(a.imdbVotes, 10))) {a.imdbVotes = 0};
  if (isNaN(parseInt(b.imdbVotes, 10))) {b.imdbVotes = 0};
  return parseInt(a.imdbVotes, 10) > parseInt(b.imdbVotes, 10) ? -1 : 1;
}