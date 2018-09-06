const BASE_URL = process.env.REACT_APP_API_URL

// artist fetch
function fetchArtists(){
    return fetch(`${BASE_URL}/artists`)
    .then(res => res.json())

}

// albums fetch
function fetchAlbums(){
    return fetch(`${BASE_URL}/albums`)
    .then(res => res.json())
}

// songs fetch
function fetchSongs(){
    return fetch(`${BASE_URL}/songs`)
    .then(res => res.json())
}

// create artist
function saveArtist(artist){
    const opts={
        method: 'POST',
        body: JSON.stringify(artist),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/artists`, opts)
    .then(res => res.json());
}

//edit artist
function editArtist(artist){
    const opts= {
        method: 'PUT',
        body: JSON.stringify(artist),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/artists/${artist.id}`, opts)
    .then(res => res.json());
}

//delete artist
function deleteArtist(id){
    const opts = {
        method: 'DELETE',
    }
    return fetch(`${BASE_URL}/artists/${id}`, opts)
}

//create album
function saveAlbum(album){
    const opts ={
        method:'POST',
        body: JSON.stringify(album),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/albums`, opts)
    .then(res => res.json())
}

//edit album
function editAlbum(album){
    const opts= {
        method: 'PUT',
        body: JSON.stringify(album),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/albums/${album.id}`, opts)
    .then(res => res.json());
}

function deleteAlbum(id){
    const opts = {
        method: 'DELETE',
    }
    return fetch(`${BASE_URL}/albums/${id}`, opts)
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
    deleteAlbum

}