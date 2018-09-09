import React, { Component } from 'react';

class EditAlbum extends Component {
    constructor(props) {
        super(props);
        const { albumEdit } = props;
        this.state = {
            album_name: albumEdit.album_name,
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
            album_name: this.state.album_name,
            id: this.props.selectedAlbum.id
        }
        this.props.onSubmit(data);
    }

    render(){
        return(
            <div className="container">
                <span className="edit-subtitle">Edit Album</span>
                <button  className="button button-size" onClick={() => this.props.handleDAlbum(this.props.selectedAlbum.id)}>Delete</button><br/>
                <form className="form" onSubmit={this.handleSubmit}>
                <label>Album Name:</label> <br/>
                    <input type="text" name="album_name" value={this.state.album_name} onChange={this.handleChange} />
                    <button className="button button-size"  type="submit">Submit</button>
                </form>
            </div>
        )

    }

}


export default EditAlbum;