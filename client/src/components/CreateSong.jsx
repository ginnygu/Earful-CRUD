import React, { Component } from 'react';

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song_name: '',
            song_url: '',
            album_id: this.props.selectedAlbum

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="container">
                <h1 className="edit-subtitle">Add Song</h1>
                <form  className="form" onSubmit={this.handleSubmit}>
                    <label>Song Name:</label>
                    <input type="text" name="song_name" value={this.state.song_name} onChange={this.handleChange} /><br/>
                    <label>Song url:</label>
                    <input type="text" name="song_url" value={this.state.song_url} onChange={this.handleChange}/><br/>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}


export default CreateSong;