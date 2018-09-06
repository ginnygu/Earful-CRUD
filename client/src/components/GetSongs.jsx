import React from 'react';

function GetSongs(props) {
  return (
    <div>
        <h1>{props.selectedAlbum.album_name}</h1>
        <button onClick={(e) => {
                        e.preventDefault();
                        props.songCreate(props.selectedAlbum.id)
                    }}>Add Song</button>
      {props.selectedAlbum.id && (
        <div>
          {props.songs.map((song) => {
            if (props.selectedAlbum.id === song.album_id) {
              return (
                  <ul key={song.id}>
                    <li>
                    {song.song_name}
                    </li>
                    <audio src={song.song_url}></audio>
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

