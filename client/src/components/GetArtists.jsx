import React from 'react';

function GetArtists(props){
    return (
        <div className="container">
        <div className="hero title">
            <h1 className="has-text-centered">Artists</h1>
            </div>
        {
            props.artists.map(artist => (
                <ul key={artist.id}>
                    <li className="artist">{artist.artist_name} <button className="button button-size fa fa-edit fa-xs" onClick={(e) => {
                        e.preventDefault();
                        props.artistEdit(artist)
                    }}></button> <button className="button" onClick={(e) => {
                        e.preventDefault();
                        props.selectArtist(artist)
                    }}>Albums</button></li> 
                </ul>

            ))
        }
        </div>
    )
}

export default GetArtists;