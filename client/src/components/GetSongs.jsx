import React from 'react';

function GetSongs(props) {
  return (
    <div>
        <h1>{props.selectedAlbum.album_name}</h1>
      {props.selectedAlbum.id && (
        <div>
          {props.songs.map((song) => {
            if (props.selectedAlbum.id === song.album_id) {
              return (
                  <ul key={song.id}>
                    <li>
                    {song.song_name}
                    </li>
                  </ul>
              )
            }
          })
          }

        </div>
      )}
    </div>
  )
}

export default GetSongs;

