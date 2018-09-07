import React from 'react';

function GetAlbums(props) {
    return(
        <div>
            <h1>{props.selectedArtist.artist_name}</h1>
            <button onClick={(e) => {
                        e.preventDefault();
                        props.albumCreate(props.artist.id)
                    }}>Add Album</button>
            {props.selectedArtist.id && (
        <div>
          {props.albums.map((album) => {
            if (props.selectedArtist.id === album.artist_id) {
              return (
                  <div key={album.id}>
                    <p>{album.album_name}</p>
                    <button className="button" onClick={(e) => {
                        e.preventDefault();
                        props.updatingAlbum(album)
                    }}>Edit Album</button>
                    <button className="button" onClick={(e) => {
                        e.preventDefault();
                        props.selectAlbum(album)
                    }}>show songs</button>
                  </div>
              )
            }
          })
          }

        </div>
      )}
        </div>
    )
}

export default GetAlbums;