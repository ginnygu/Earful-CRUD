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
            <button className="button back-button fa fa-arrow-left" onClick= {(e)=> {
                e.preventDefault();
                props.backToArtist()
            }}></button>
            {props.selectedArtist.id && (

                <div>
                    {props.albums.map((album) => {
                        if (props.selectedArtist.id === album.artist_id) {
                            return (
                                <div key={album.id}>
                                    <p className="artist">{album.album_name} 
                                        <button className="button fa fa-edit" onClick={(e) => {
                                            e.preventDefault();
                                            props.updatingAlbum(album)
                                        }}></button>
                                        <button className="button" onClick={(e) => {
                                            e.preventDefault();
                                            props.selectAlbum(album)
                                        }}>show songs</button>
                                    </p>

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

export default GetAlbums;