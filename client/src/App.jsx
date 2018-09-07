import React, { Component } from 'react';
import './App.css';
import GetArtists from './components/GetArtists';
import GetAlbums from './components/GetAlbums';
import GetSongs from './components/GetSongs';
import CreateArtist from './components/CreateArtist';
import EditArtist from './components/EditArtist';
import CreateAlbum from './components/CreateAlbum';
import EditAlbum from './components/EditAlbum';
import CreateSong from './components/CreateSong'
import Header from './components/Header';
import {
  fetchArtists,
  fetchAlbums,
  fetchSongs,
  saveArtist,
  editArtist,
  deleteArtist,
  saveAlbum,
  editAlbum,
  deleteAlbum,
  saveSong
} from './services/api';

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
    this.handleDArtist = this.handleDArtist.bind(this);
    this.createAlbum = this.createAlbum.bind(this);
    this.albumCreate = this.albumCreate.bind(this);
    this.updateAlbum = this.updateAlbum.bind(this);
    this.updatingAlbum = this.updatingAlbum.bind(this);
    this.handleDAlbum = this.handleDAlbum.bind(this);
    this.createSong = this.createSong.bind(this);
    this.songCreate = this.songCreate.bind(this);
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
  artistEdit(artist) {
    this.setState({
      selectedArtist: artist,
      currentView: 'Edit Artist'
    })
  }

  updateArtist(artist) {
    editArtist(artist)
      .then(data => fetchArtists())
      .then(data => {
        this.setState({
          currentView: 'Home',
          artists: data.artists
        })
      })
  }

  handleDArtist(id) {
    deleteArtist(id)
      .then(res => {
        fetchArtists()
          .then(data => {
            this.setState({
              currentView: 'Home',
              artists: data.artists
            })
          })

      })
  }

  // to the add album view
  albumCreate(artist) {
    this.setState({
      selectedArtist: artist,
      currentView: 'Create Album'
    })
  }

  createAlbum(album) {
    saveAlbum(album)
      .then(data => fetchAlbums())
      .then(data => {
        this.setState({
          albums: data,
          selectedArtist: '',
          currentView: 'Home'
        })
      })
  }

  //to the edit album view
  updatingAlbum(album) {
    this.setState({
      selectedAlbum: album,
      currentView: 'Edit Album'
    })
  }

  selectAlbum(album) {
    this.setState({
      selectedAlbum: album,
      currentView: 'Songs'
    })
  }


  updateAlbum(album) {
    editAlbum(album)
      .then(data => fetchAlbums())
      .then(data => {
        this.setState({
          currentView: 'Albums',
          albums: data.albums
        })
      })
  }
  handleDAlbum(id) {
    deleteAlbum(id)
      .then(res => {
        fetchAlbums()
          .then(data => {
            this.setState({
              currentView: 'Albums',
              albums: data.albums
            })
          })

      })
  }
  //to create song
  songCreate(album) {
    this.setState({
      selectedAlbum: album,
      currentView: 'Create Song'
    })
  }

  createSong(song) {
    saveSong(song)
      .then(data => fetchSongs())
      .then(data => {
        this.setState({
          songs: data.songs,
          selectedAlbum: '',
          currentView: 'Home'
        })
      })
  }



  whichToRender() {
    const { currentView } = this.state;
    const { artists, selectedArtist, albums, selectedAlbum, songs } = this.state;

    switch (currentView) {
      case 'Home':
        return <GetArtists
          key={artists.id}
          artistEdit={this.artistEdit}
          artists={artists}
          selectArtist={this.selectArtist}
        />;
        break;
      case 'Albums':
        const artist = artists.find(artist => artist.id === selectedArtist.id);
        return <GetAlbums key={albums.id}
          selectedArtist={selectedArtist}
          albums={albums}
          artist={artist}
          selectAlbum={this.selectAlbum}
          albumCreate={this.albumCreate}
          selectedAlbum={selectedAlbum}
          updatingAlbum={this.updatingAlbum}
        />;
        break;
      case 'Songs':
        const album = albums.find(album => album.id === selectedAlbum.id);
        return <GetSongs key={songs.id}
          selectedArtist={selectedArtist}
          selectedAlbum={selectedAlbum}
          songs={songs}
          album={album}
          songCreate={this.songCreate}
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
          handleDArtist={this.handleDArtist}
        />;
        break;
      case 'Create Album':
        return <CreateAlbum
          onSubmit={this.createAlbum}
          selectedArtist={selectedArtist}
        />;
        break;
      case 'Edit Album':
        const albumEdit = albums.find(album => album.id === selectedAlbum.id);
        return <EditAlbum
          selectedAlbum={selectedAlbum}
          onSubmit={this.updateAlbum}
          albums={albums}
          albumEdit={albumEdit}
          handleDAlbum={this.handleDAlbum}
        />;
        break;
      case 'Create Song':
        return <CreateSong
        onSubmit={this.createSong}
        selectedAlbum={selectedAlbum}
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
          links={links} />
        {this.whichToRender()}
      </div>
    );
  }
}

export default App;
