import { connect } from 'react-redux'
import Station from '../components/Station'
import Songs from '../components/Songs'
import { convertSong } from  '../utils.js'
import { toggleSong } from '../action-creators/player';

function mapStateToProps(state, ownProps){
  console.log(state, 'state in Station Container');
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs.filter(song => song.genre === ownProps.params.genreName)
            .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};


const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
