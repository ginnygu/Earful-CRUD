import React from 'react';

function GetArtists(props){
    return (
        <div>
            <h1>Artists</h1>
        {
            props.artists.map(artist => (
                <ul key={artist.id}>
                    <li>{artist.artist_name}</li>
                    <button onClick={(e) => {
                        e.preventDefault();
                        props.selectArtist(artist)
                    }}>show albums</button>
                </ul>

            ))
        }
        </div>
    )
}

export default GetArtists;