import React from 'react';

function Home() {
    return (
        <div className="container landing">
            <h1 className="title">Welcome to Earful</h1>
            <p className="subtitle">Welcome artists! Share your music in this app with others like your self! </p>
            <div className="instruction">
                <p>Instructions</p>
                <p>1. Add your artist name</p>
                <p>2. Add your album name</p>
                <p>3. Add your song name with its url</p>
                <p>4. Share the with others!</p>
            </div>
        </div>
    )
}

export default Home;