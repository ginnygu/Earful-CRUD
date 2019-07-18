import React from 'react';

function GetSongs(props) {
    return (
        <div className="container">
            <div className="hero has-text-centered">
                <h1 className="title album-name">{props.selectedAlbum.album_name}</h1>
                <button className="subtitle button"
                    onClick={(e) => {
                        e.preventDefault();
                        props.songCreate(props.selectedAlbum)
                    }}>Add Song</button>
            </div>
            <button className="button back-button fa fa-arrow-left" onClick= {(e)=> {
                e.preventDefault();
                props.selectArtist(props.selectedArtist)
            }}></button>
            {props.selectedAlbum.id && (
                <div>
                    {props.songs.map((song) => {
                        if (props.selectedAlbum.id === song.album_id) {
                            return (
                                <div key={song.id}>
                                    <span className="edit-subtitle">{song.song_name}</span>
                                    <button className="button button-size fa fa-edit"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            props.selectSong(song)
                                        }}></button><br/>
                                    <div className="song-list">
                                        <audio controls src={song.song_url}></audio><br/>
                                    </div>
                                </div>
                            )
                        }
                        return
                    })
                    }

                </div>
            )}
        </div>
    )
}

export default GetSongs;

