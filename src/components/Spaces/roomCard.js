import React from "react";

function RoomCard(props){

  let handler = () =>{
    props.parentSet(props.state.devices)
  }

  let urlA = "https://media.istockphoto.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?k=20&m=1297586166&s=170667a&w=0&h=WGLzH9yUuTBb95S7KeFg8IzpgHuLZJM58q4xI83C9_s="
    if (props.state.name === "Dinner room" ){
      urlA = "https://www.mydomaine.com/thmb/9Q5DhDXpBubVeata7Kxb3ipTb_A=/1900x1308/filters:fill(auto,1)/DesignedbyEmilyHendersonDesign_PhotobySaraTramp_8-10c43b6e9b6a4f529313664f218e5721.jpg"
    }
    else if (props.state.name === "Living room" ){
      urlA = "https://www.brick99.com/wp-content/uploads/2021/02/Living-Room-Ideas1.jpeg"
    }
  return <button className="card border-dark mb-3" style={{overflow:"hidden",height:"10rem",width:"10rem"}} onClick={handler}>
    <h5 className="card-title" style={{textAlign:"left",marginLeft:"5%"}}>{props.state.name}</h5>
  <div className="card-body" >
    <img className="card-img-top" src={urlA} alt="Card image cap" style={{maxWidth:"100%",maxHeight:"50%"}} />
  </div>
  </button>;

    
}

export default RoomCard;