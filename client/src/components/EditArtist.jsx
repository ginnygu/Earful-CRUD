import React, { Component } from 'react';

class EditArtist extends Component {
    constructor(props) {
        super(props);
        const { artists } = props;
        this.state = {
            artist_name: artists.artist_name

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
            artist_name: this.state.artist_name,
            id: this.props.artists.id
        }
        this.props.onSubmit(data);
    }

    render(){
        return(
            <div>
                <h1>Add Artist</h1>
                <form onSubmit={this.handleSubmit}>
                <label>Artist Name:</label>
                    <input type="text" name="artist_name" value={this.state.artist_name} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )

    }

}


export default EditArtist;