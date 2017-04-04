import React from 'react';
import Songs from './Songs';

export default function Station (props) {

  const genre_name = props.genreName;
  const songs = props.songs;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;

  console.log(props, 'this is props in station!');
  return (
    <div>
      <h3>{ genre_name } Station</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  );

}