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
  let aVotes = a.imdbVotes.replace(/,/g , '');
  let bVotes = b.imdbVotes.replace(/,/g , '');

  if (isNaN(parseInt(aVotes, 10))) {aVotes = 0};
  if (isNaN(parseInt(bVotes, 10))) {bVotes = 0};
  return parseInt(aVotes, 10) > parseInt(bVotes, 10) ? -1 : 1;
}