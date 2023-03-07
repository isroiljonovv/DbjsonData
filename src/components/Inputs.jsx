import React from "react";
import { FiArrowRight } from "react-icons/fi"


export default function Input() {
    return (
        <div className="container mt-5">
            <div className="inputDiv">
                <div className="row">
                    <div className="col">
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing .</h5>
                        <p className="text-secondary">Contact ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter email address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span class="input-group-text" id="basic-addon2"><FiArrowRight/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}