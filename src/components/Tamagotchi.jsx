import PropTypes from 'prop-types';
import React from 'react';
import Feed from './Feed';
import Sleep from './Sleep';
import Play from './Play';

function Tamagotchi(props) {

  return (
    <div>
        <h2>JimAGotchi</h2>
        <img src="https://media.licdn.com/dms/image/C5603AQEpNsozWfuDTA/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=YL4qihg_CtkGQnktIE2BquMU4CucVC-Ewv43zfIiVSc"></img>
        <Feed 
        status = {props} onFeedButtonClicked = {props.onFeedButtonClicked}/>
        <Sleep status = {props} onSleepButtonClicked = {props.onSleepButtonClicked}/>
        <Play status = {props} onPlayButtonClicked = {props.onPlayButtonClicked}/>
    </div>
  );
}



export default Tamagotchi;