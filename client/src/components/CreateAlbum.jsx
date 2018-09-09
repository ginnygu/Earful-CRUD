import React, { Component } from 'react';

class CreateAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album_name: '',
            artist_id: this.props.selectedArtist

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
        this.props.onSubmit(this.state);
    }

    render(){
        return(
            <div className="container">
                <h1 className="edit-subtitle">Add Album</h1>
                <form  className="form" onSubmit={this.handleSubmit}>
                <label>Album Name:</label><br/>
                    <input type="text" name="album_name" value={this.state.album_name} onChange={this.handleChange} />
                    <button className="button button-size" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}


export default CreateAlbum;