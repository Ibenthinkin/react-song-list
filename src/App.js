import React, { Component } from 'react';

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
    getSongs() {
        return this.state.songs.map(song => {
            return <li key={song.id}>
                <div>
                    <h2>{song.title}</h2>
                </div>
            </li>
        })
    }
    render(){
      return (
        <div className="App">
          <ul>{this.getSongs()}</ul>
        </div>
      );
    }
}

export default App;
