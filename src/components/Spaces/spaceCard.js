import React from "react";

function SpaceCard(props){

  let handler = () =>{
    props.parentSet(props.state.id)
  }

  if (props.state.isActive) {
    let urlA = "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      if (props.state.type === "loft" ){
          urlA = "https://media.admagazine.com/photos/618a615bc649ce85eef7538d/master/w_1600%2Cc_limit/85658.jpg"
      }
    return <button className="card border-dark mb-3" style={{overflow:"hidden",height:"18rem",width:"20rem"}} onClick={handler}>
    <img className="card-img-top" src={urlA} alt="Card image cap" style={{maxWidth:"100%",maxHeight:"50%"}} />
    <div className="card-body" style={{textAlign:"left",marginLeft:"5%"}}>
      <br/>
      <h5 className="card-title">{props.state.name}</h5>
      <p className="card-text">{props.state.address}</p>
    </div>
    </button>;
  }
  else{
    return null;
  }
    
}

export default SpaceCard;