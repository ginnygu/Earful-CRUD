const BASE_URL = process.env.REACT_APP_BASE_URL;

// artist fetch
function fetchArtists() {
  return fetch(`${BASE_URL}/artists`)
    .then(res => res.json());
}

// albums fetch
function fetchAlbums() {
  return fetch(`${BASE_URL}/albums`)
    .then(res => res.json());
}

// songs fetch
function fetchSongs() {
  return fetch(`${BASE_URL}/songs`)
    .then(res => res.json());
}

// create artist
function saveArtist(artist) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/artists`, opts)
    .then(res => res.json());
}

// edit artist
function editArtist(artist) {
  const opts = {
    method: 'PUT',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/artists/${artist.id}`, opts)
    .then(res => res.json());
}

// delete artist
function deleteArtist(id) {
  const opts = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/artists/${id}`, opts);
}

// create album
function saveAlbum(album) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(album),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/albums`, opts)
    .then(res => res.json());
}

// edit album
function editAlbum(album) {
  const opts = {
    method: 'PUT',
    body: JSON.stringify(album),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/albums/${album.id}`, opts)
    .then(res => res.json());
}
// delete album
function deleteAlbum(id) {
  const opts = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/albums/${id}`, opts);
}

// create song
function saveSong(song) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/songs`, opts)
    .then(res => res.json());
}

// edit song
function editSong(song) {
  const opts = {
    method: 'PUT',
    body: JSON.stringify(song),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/songs/${song.id}`, opts)
    .then(res => res.json());
}

// delete song
function deleteSong(id) {
  const opts = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/songs/${id}`, opts);
}

export {
  fetchArtists,
  fetchAlbums,
  fetchSongs,
  saveArtist,
  editArtist,
  deleteArtist,
  saveAlbum,
  editAlbum,
  deleteAlbum,
  saveSong,
  editSong,
  deleteSong

};
