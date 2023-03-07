import React from "react";
import AkarImg from "../images/akar.png"
import Fedx from "../images/fedx.png"
import Amazon from "../images/amazon.png"
import Fedex from "../images/fedex.png"
import Google from "../images/google.png"
import Microsoft from "../images/Microspft.png"
export default function Akar(){
    return(
        <div className="container mt-5">
            <span>
                <img src={Fedx} alt="" />
            </span>
            <span>
                <img src={Amazon} alt="" />
            </span>
            <span>
                <img src={Fedex} alt="" />
            </span>
            <span>
                <img src={Google} alt="" />
            </span>
            <span>
                <img src={Microsoft} alt="" />
            </span>
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                <div className="col">
                    <img src={AkarImg} style={{width:"100%"}} alt="" />             
                </div>
                <div className="col myCol">
                    <p>Lorem, ipsum dolor.</p>
                    <h4>Two Saas are better than one.</h4>
                    <p>One of the most fundamental ways to go about that is to create a memorable e-commerce slogan.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}