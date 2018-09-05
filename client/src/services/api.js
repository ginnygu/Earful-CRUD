const BASE_URL = process.env.REACT_APP_API_URL

// artist fetch
function fetchArtists(){
    return fetch(BASE_URL + '/artists')
    .then(res => res.json())

}

// albums fetch
function fetchAlbums(){
    return fetch(BASE_URL + `/albums`)
    .then(res => res.json())
}

// songs fetch
function fetchSongs(){
    return fetch(BASE_URL + `/songs`)
    .then(res => res.json())
}

export {
    fetchArtists,
    fetchAlbums,
    fetchSongs

}