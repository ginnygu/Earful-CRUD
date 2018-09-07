import React from 'react';

function GetArtists(props){
    return (
        <div className="container has-text-centered">
        <div className="hero title">
            <h1>Artists</h1>
            </div>
        {
            props.artists.map(artist => (
                <ul key={artist.id}>
                    <li>{artist.artist_name}</li>
                    <button className="button" onClick={(e) => {
                        e.preventDefault();
                        props.selectArtist(artist)
                    }}>show albums</button>
                    <button className="button" onClick={(e) => {
                        e.preventDefault();
                        props.artistEdit(artist)
                    }}>Edit Artist</button>
                </ul>

            ))
        }
        </div>
    )
}

export default GetArtists;