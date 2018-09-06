import React, { Component } from 'react';
import './App.css';
import {
  fetchArtists,
  fetchAlbums,
  fetchSongs,
  saveArtist,
  editArtist
} from './services/api';
import GetArtists from './components/GetArtists';
import GetAlbums from './components/GetAlbums';
import GetSongs from './components/GetSongs';
import CreateArtist from './components/CreateArtist';
import EditArtist from './components/EditArtist';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: [],
      songs: [],
      selectedArtist: '',
      selectedAlbum: '',
      currentView: 'Home'
    }
    this.selectArtist = this.selectArtist.bind(this);
    this.selectAlbum = this.selectAlbum.bind(this);
    this.createArtist = this.createArtist.bind(this);
    this.artistEdit = this.artistEdit.bind(this);
    this.updateArtist = this.updateArtist.bind(this);
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

  createArtist(artist) {
    saveArtist(artist)
      .then(data => fetchArtists())
      .then(data => {
        this.setState({
          currentView: 'Home',
          artists: data.artists
        })
      })
  }
// to the album's view
  selectArtist(artist) {
    this.setState({
      selectedArtist: artist,
      currentView: 'Albums'
    })
  }

// to the edit artist view
  artistEdit(artist){
    this.setState({
      selectedArtist: artist,
      currentView: 'Edit Artist'
    })
  }

  selectAlbum(album) {
    this.setState({
      selectedAlbum: album,
      currentView: 'Songs'
    })
  }

  updateArtist(artist){
    editArtist(artist)
    .then(data => fetchArtists())
    .then(data => {
      this.setState ({
        currentView: 'Home',
        artists: data.artists
      })
    })
  }

  whichToRender() {
    const { currentView } = this.state;
    const { artists, selectedArtist, albums, selectedAlbum, songs } = this.state;

    switch (currentView) {
      case 'Home':
        return <GetArtists
          key={this.state.artists.id}
          artistEdit={this.artistEdit}
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
        return <GetSongs key={this.state.songs.id}
          selectedAlbum={selectedAlbum}
          songs={songs}
          album={album}
        />;
        break;
      case 'Create Artist':
        return <CreateArtist
          onSubmit={this.createArtist}
        />;
        break;
      case 'Edit Artist':
      const edits = artists.find(artist => artist.id === selectedArtist.id);
      return <EditArtist 
        onSubmit={this.updateArtist}
        artists={edits}
      />;
      break
    }
  }

  handleClick(link) {
    this.setState({
      currentView: link
    });
  }

  render() {
    const links = [
      'Home',
      'Create Artist'
    ];
    return (
      <div>
        <Header onClick={this.handleClick.bind(this)}
          links={links}/>
        {this.whichToRender()}
      </div>
    );
  }
}

export default App;
