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
            <div className="container">
                <span className="edit-subtitle">Add Artist</span>
                <button className="button back-button" onClick= {(e)=> {
                e.preventDefault();
                this.props.backToArtist()
            }}>back</button>
                <form className="form" onSubmit={this.handleSubmit}>
                <label>Artist Name:</label><br/>
                    <input type="text" name="artist_name" value={this.state.artist_name} onChange={this.handleChange} />
                    <button className="button button-size" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}


export default CreateArtist;