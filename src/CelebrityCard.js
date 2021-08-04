//https://www.youtube.com/watch?v=4KxHcbQ8GYQ
import React from 'react';

function CelebrityCard(props){
    return(
      <div className="CelebrityCard">
        <div className="CardBody">
          <div class="small-text" style={{marginLeft: '2vw'}}>{props.name}</div>
          <div class="small-text" style={{marginLeft: '2vw'}}>{props.handle}</div>
          <h2 className="celebrityName">{props.name}</h2>
          <h3 className="celebrityName">{props.handle}</h3>
          <p className="celebrityFollowers">{props.followers}</p>
        </div>
        <button className="celebrityCardButton">
          BID NOW
          </button>
      </div>
    )
  }
//          <img src={props.img} class="celebrityCardImage"/>

  export default CelebrityCard;