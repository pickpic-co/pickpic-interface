//https://www.youtube.com/watch?v=4KxHcbQ8GYQ
import React from 'react';

function CelebrityCard(props){
    return(
      <div className="CelebrityCard">
        <div class="container">
        <img src={props.img} class="celebrityCardImage"/>
          <div class="centered">Centered</div>
          <div class="small-text">{props.name}</div>
          <div class="small-text">{props.handle}</div>
        </div>
        <button className="celebrityCardButton">
          BID NOW
          </button>
      </div>
    )
  }
//          <img src={props.img} class="celebrityCardImage"/>

  export default CelebrityCard;