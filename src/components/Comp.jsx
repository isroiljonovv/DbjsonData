import React from "react";
import Komputer from "../images/komp.png"
import Klava from "../images/klava.png"





export default function Komp(){
    return(
        <div className="ob">
        <p>Shakalad</p>
        <p>Hello</p>
        <div className="container myRow myComp">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mt-5 myCol">
                    <p>Lorem, ipsum dolor.</p>
                    <h3>Always the real thing, always Saas</h3>
                    <p className="text-secondary">And that number is growing every day. That means e-commerce is thriving.</p>
                    <button className="btn btn-primary">Try For Free</button>
                    <button className="btn btn-light">Try For Free</button>
                    <p className="text-secondary">There are some things money can’t buy. For everything else there’s ‘’MasterCard” is a good example. </p>
                </div>
                <div className="col">
                        <img src={Komputer} style={{width:"100%"}} alt="" />
                        {/* <img src={Klava} style={{width:"100%", height:"50%"}} alt="" /> */}
                </div>
            </div>
        </div>
        </div>
    )
}