import React from 'react';

function GetAlbums(props) {
    return(
        <div>
            <h1>{props.selectedArtist.artist_name}</h1>
            {
                props.selectedArtist.albums.map(album => (
                    <ul key={album.id}>
                        <li>{album.album_name}</li>
                        <button onClick={(e) => {
                        e.preventDefault();
                        props.selectAlbum(album)
                    }}>show songs</button>
                    </ul>
                ))
            }
        </div>
    )
}

export default GetAlbums;