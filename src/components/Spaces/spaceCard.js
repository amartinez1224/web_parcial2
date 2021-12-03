import React, {useState} from "react";

function Card(props){

    console.log(props.state)

    //props.state.name

    return <div class="card" style="width: 18rem;">
    <img class="card-img-top" src={props.state.url} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{props.state.name}</h5>
      <p class="card-text">{props.state.text}</p>
    </div>
    </div>;
    
}

export default Card;