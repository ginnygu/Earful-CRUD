import React, { Component } from 'react';
import './App.css';
import { fetchArtists, fetchAlbums, fetchSongs } from './services/api';
import GetArtists from './components/GetArtists';
import GetAlbums from './components/GetAlbums';
import GetSongs from './components/GetSongs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: [],
      songs: [],
      selectedArtist: '',
      selectedAlbum: '',
      currentView: 'Landing'
    }
    this.selectArtist = this.selectArtist.bind(this)
    this.selectAlbum = this.selectAlbum.bind(this)
  }
  componentDidMount() {
    fetchArtists()
      .then(data => {
        this.setState({ artists: data.artists })
      })
    fetchAlbums()
      .then(data => {
        this.setState({ albums: data.albums })
      })
    fetchSongs()
      .then(data => {
        this.setState({ songs: data.songs })
      })

  }

  selectArtist(artist) {
    this.setState({
      selectedArtist: artist,
      currentView: 'Albums'
    })
  }

  selectAlbum(album) {
    this.setState({
      selectedAlbum: album,
      currentView: 'Songs'
    })
  }

  whichToRender() {
    const { currentView } = this.state;
    const { artists, selectedArtist, albums, selectedAlbum, songs } = this.state;

    switch (currentView) {
      case 'Landing':
        return <GetArtists
          key={this.state.artists.id}
          artists={artists}
          selectArtist={this.selectArtist}
        />;
        break;
      case 'Albums':
        const artist = artists.find(artist => artist.id === selectedArtist.id);
        return <GetAlbums key={this.state.albums.id}
          selectedArtist={selectedArtist}
          albums={albums}
          artist={artist}
          selectAlbum={this.selectAlbum}
        />;
        break;
      case 'Songs':
        const album = albums.find(album => album.id === selectedAlbum.id);
        const fil = songs.filter(song => song.album_id === selectedAlbum.id);
        return <GetSongs key={this.state.songs.id}
          selectedAlbum={selectedAlbum}
          songs={songs}
          album={album}
          fil={fil}
        />;
        break;
    }
  }

  render() {
    return (
      <div>
        {this.whichToRender()}
      </div>
    );
  }
}

export default App;
