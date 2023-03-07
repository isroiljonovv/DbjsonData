import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

export default function Table() {
    const [table, setTable] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then(res => setTable(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        table.map((task, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{task.name}</td>
                                <td>{task.surname}</td>
                                <td>{task.year}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>

            <Link to='/home'>
                <button className="btn btn-danger">Orqaga</button>
            </Link>
        </div>
    )
}