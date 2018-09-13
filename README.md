# Earful-CRUD

A Ruby-on-Rails and React.js app that lets Indie Artists create their own albums and upload their songs. They can share the link for others to listen to their songs.

### User stories
- As a user, I want to be able to create my artist and album
- As a user, I want to to be able to add songs to my album
- As a user, I want to be able to edit my album name and song names
- As a user, I want to be able to delete my songs


### Technologies used
- Ruby On Rails for backend 
- React.js for frontend
- Bulma for css styling
- Heroku for deploying backend
- Surge.sh for deploying frontend

#### Dependencies used
- Bulma
- Eslint
- Yarn
- React
- Rack-Cors

### ERD
![Alt](https://github.com/ginnygu/Earful-CRUD/blob/master/ERD%20and%20Wireframes/Screen%20Shot%202018-09-10%20at%2012.32.30%20PM.png)

### Wireframes
![Alt](https://github.com/ginnygu/Earful-CRUD/blob/master/ERD%20and%20Wireframes/Screen%20Shot%202018-09-10%20at%2012.36.27%20PM.png)
![Alt](https://github.com/ginnygu/Earful-CRUD/blob/master/ERD%20and%20Wireframes/Screen%20Shot%202018-09-10%20at%2012.36.40%20PM.png)
![Alt](https://github.com/ginnygu/Earful-CRUD/blob/master/ERD%20and%20Wireframes/Screen%20Shot%202018-09-10%20at%2012.36.52%20PM.png)
![Alt](https://github.com/ginnygu/Earful-CRUD/blob/master/ERD%20and%20Wireframes/Screen%20Shot%202018-09-10%20at%2012.37.26%20PM.png)

### MVP
- Be able to Read, Create, Update and Delete from Artist, Albums and Songs.

### Post MVP features
- Direct upload
- User login/Auth

### Code Snippet
```
<div className="container">
                <span className="edit-subtitle">Edit Song</span>
                <button className="button button-size" onClick={() => 
                this.props.handleDSong(this.props.selectedSong.id)}>Delete</button>
                <form className="form" onSubmit={this.handleSubmit}>
                <label>Album Name:</label><br/>
                    <input type="text" name="song_name" value={this.state.song_name} onChange={this.handleChange} />
                    <button className="button button-size" type="submit">Submit</button>
                </form>
            </div>
```

### Credits
- GA Ruby on Rails classwork, homework provided help
- GA React.js classwork, homework and project 3 provided help


