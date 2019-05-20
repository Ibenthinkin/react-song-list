import React, { Component } from 'react'


class SongForm extends Component {

  state = {
    title: ''
  }

  handleChange = (event) => {
    let text = event.target.value
      this.setState({
        title : text
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSong(this.state)
    this.setState ({
      title: ''
    })

  }


  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input name='title' value={this.state.title} onChange={this.handleChange}></input>
        <button>Submit</button>
      </form>
      </div>
    );
  }
}


export default SongForm
