import React from 'react';

function GetSongs(props) {
    return (
        <div className="container">
            <div className="hero has-text-centered">
                <h1 className="title album-name">{props.selectedAlbum.album_name}</h1>
                <button className="subtitle button"
                    onClick={(e) => {
                        e.preventDefault();
                        props.songCreate(props.selectedAlbum.id)
                    }}>Add Song</button>
            </div>
            {props.selectedAlbum.id && (
                <div>
                    {props.songs.map((song) => {
                        if (props.selectedAlbum.id === song.album_id) {
                            return (
                                <div className="" key={song.id}>
                                    <p>{song.song_name}</p> <br />
                                    <div className="song-list">
                                        <audio controls src={song.song_url}></audio><br/>
                                        <button 
                                            onClick={(e) => {
                                            e.preventDefault();
                                            props.selectSong(song)
                                        }}>Edit Song Name</button>
                                    </div>
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

export default GetSongs;

