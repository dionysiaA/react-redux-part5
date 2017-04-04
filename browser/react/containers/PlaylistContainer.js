import React, {Component} from 'react';
import { connect } from 'react-redux'
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state){
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progrss,
    selectedPlaylist: state.playlists.selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: function (song, list) {
       dispatch(toggleSong(song, list));
    }
  }
}

const PlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);

export default PlaylistContainer;