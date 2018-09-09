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
            <div className="container">
                <span className="edit-subtitle">Edit Artist</span>
                <button className="button button-size" onClick={() => this.props.handleDArtist(this.props.artists.id)}>Delete</button>
                <form className="form" onSubmit={this.handleSubmit}>
                <label>Artist Name:</label><br/>
                    <input type="text" name="artist_name" value={this.state.artist_name} onChange={this.handleChange} />
                    <button className="button button-size" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}


export default EditArtist;