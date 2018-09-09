import React, { Component } from 'react';

class EditSong extends Component {
    constructor(props) {
        super(props);
        const { songs } = props;
        this.state = {
            song_name: songs.song_name,
            album_id: this.props.selectedAlbum

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const data = {
            song_name: this.state.song_name,
            id: this.props.selectedSong.id
        }
        this.props.onSubmit(data);
    }

    render(){
        return(
            <div className="container">
                <span className="edit-subtitle">Edit Song</span>
                <button className="button button-size" onClick={() => this.props.handleDSong(this.props.selectedSong.id)}>Delete</button>
                <form className="form" onSubmit={this.handleSubmit}>
                <label>Album Name:</label><br/>
                    <input type="text" name="song_name" value={this.state.song_name} onChange={this.handleChange} />
                    <button className="button button-size" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}


export default EditSong;