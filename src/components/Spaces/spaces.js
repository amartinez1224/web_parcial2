import React, {useState, useEffect} from "react";
import SpaceCard from "./spaceCard";
import RoomCard from "./roomCard";
import Chart from "./chart";
import {FormattedMessage} from 'react-intl';

function Spaces(){
    
    let [spc, setSpc] = useState({idActual:false,data:[]});
    
    useEffect(() => {
        console.log("useEffect")
        fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
        .then(response => response.json())
        .then(jdata =>{
            fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
            .then(response => response.json())
            .then(data => {
                setSpc({...spc,data:jdata,dataRoom:data});
            })
        })

     },[]);

    let handler = (id) =>{
        setSpc({...spc,idActual:id,listDevices:[]})  
    }

    let handler2 = (devices) =>{
        setSpc({...spc,listDevices:devices})
    }

    let espacios = () =>{  
        return spc.data.map((item,i)=>{return (
            <div className="col-xs-4">
              <SpaceCard state={item} key={i+1} parentSet={handler}/>
            </div>
        )});              
    }

    let data1 = (id) =>{
        return spc.dataRoom.filter(room => room.homeId == id).map((item,i)=>{return (
            <div className="col-xs-4">
              <RoomCard state={item} key={i+1} parentSet={handler2}/>
            </div>
        )});
    }

    let data2 = () =>{
        if (spc.listDevices){
            return spc.listDevices.map((item,i)=>{return (
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.desired.value}</td>
                </tr>
            )});
        }
        else{
            return null;
        }
    }

    let rooms = () =>{  
        if (spc.idActual){
            return <div>
                <br/>
                <h2><FormattedMessage id="My rooms"/></h2>
                <br/>
                 <div className="container">
                 <div className="row">
                <div className="col-xs-7">
                <div className="container">
                <div className="row">
                    {data1(spc.idActual)}
                </div>
                </div>
                </div>
                <div className="col-xs-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col"><FormattedMessage id="Device"/></th>
                        <th scope="col"><FormattedMessage id="Value"/></th>
                        </tr>
                    </thead>
                    <tbody>
                    {data2()}
                    </tbody>
                </table>
                </div>
                </div>
                <br/>
                <Chart data={spc.dataRoom.filter(room => room.homeId == spc.idActual)}/>
                </div>
                </div>;  
        }
        else{
            return null;
        }          
    }
    //console.log(spc)

    return <div style={{marginLeft:"15pt",marginTop:"20pt",marginRight:"25pt"}}>
    <h1><FormattedMessage id="My spaces"/></h1> 
    <br/>
    <div className="container">
    <div className="row">
    {espacios()}
    </div>
    </div>
    <hr className="my-4"/>
    {rooms()}
    </div>;
}

export default Spaces;