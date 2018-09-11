import React from 'react';

function GetAlbums(props) {
    return (
        <div className="container">
            <div className="hero has-text-centered">
                <h1 className="title album-name">{props.selectedArtist.artist_name}</h1>
                <button className="subtitle button" onClick={(e) => {
                    e.preventDefault();
                    props.albumCreate(props.artist)
                }}>Add Album</button>
            </div>
            <button className="button back-button" onClick= {(e)=> {
                e.preventDefault();
                props.backToArtist()
            }}>back</button>
            {props.selectedArtist.id && (

                <div>
                    {props.albums.map((album) => {
                        if (props.selectedArtist.id === album.artist_id) {
                            return (
                                <div key={album.id}>
                                    <p className="title">{album.album_name}</p>
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