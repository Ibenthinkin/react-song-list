import React from 'react'
import Song from './Song'

const SongList = (props) => {
  const songList = props.songs.map((song, index) => <Song {...song} key={Date.now() + index} deleteSong = {props.deleteSong}/> )
  return (
    <div>{songList}</div>
  )
}

export default SongList
