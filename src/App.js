import React, { Component } from 'react';
import SongList from './SongList'
import SongForm from './SongForm'


class App extends Component {
    state = {
        songs: [{
            id: 1,
            title: "Call Me Maybe"
        },{
            id: 2,
            title: "For Whom The Bell Tolls"
        }]
    }

    addSong = (song) =>{
      const newSong = {...song, id: Date.now()}
      const songs = [...this.state.songs, newSong]
      this.setState ({ songs})
    }

    deleteSong = id => {
      const songs = this.state.songs.filter(song => song.id !== id);
      this.setState({songs})
    }


    render(){
      return (
        <div className="App">
        < SongForm addSong={this.addSong}/>
        < SongList songs={this.state.songs} deleteSong={this.deleteSong}/>
        </div>
      );
    }
}

export default App;
