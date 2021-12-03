import React, {
    useState,
    render,
    useEffect
} from "react";
import {
    useHistory
} from "react-router";
import Card from "./spaceCard";



function Spaces(){
    let [spc, setSpc] = useState([]);
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
        .then(response => response.json())
        .then(jdata =>{
            let m = []
            for (let i = 0; i < jdata.length; i++) {
                console.log(jdata[i])
                if (jdata[i]["isActive"]) {
                    let urlA = "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    if (jdata[i]["type"] === "loft" ){
                        urlA = "https://media.admagazine.com/photos/618a615bc649ce85eef7538d/master/w_1600%2Cc_limit/85658.jpg"
                    }
                    let n = <div class="col-sm">
                             <Card state={{name:jdata[i]["name"],text:jdata[i]["address"],url:urlA}} id={jdata[i]["id"]}/>
                            </div>
                    m.push(n)
                }
            }
            setSpc(m)
        })
     },[]);

     console.log(spc)
    return <div>
    <h1>My spaces</h1> 
    <div class="container">
     {spc}
    <div class="row">
    </div>
    </div>
    </div>;
}

export default Spaces;