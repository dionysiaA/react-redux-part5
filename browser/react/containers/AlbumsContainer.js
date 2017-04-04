import React, {Component} from 'react';
import { connect } from 'react-redux'
import Albums from '../components/Albums';

function mapStateToProps(state){
  return {
    albums: state.albums.list
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumsContainer;
