import React, {Component} from 'react';
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar';

function mapStateToProps(state){
  return {
    playlists: state.playlists.list
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
