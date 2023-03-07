import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
export default function Cars() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/cards')
            .then(res => setCars(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className="container">
            <div className="row">
            {
                cars.map(task => (
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src={task.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{task.name}</h5>
                                <p className="card-text">{task.title}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                    </div>
                ))
            }
            </div>
            <Link to='/home'>
            <button className="btn btn-danger">Orqaga</button>
            </Link>
        </div>
    )
}