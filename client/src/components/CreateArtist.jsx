import React, { Component } from 'react';

class CreateArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist_name: '',

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


export default CreateArtist;