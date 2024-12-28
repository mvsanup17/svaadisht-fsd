import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import './styles/detailings.css';
// import { Link } from "react-router-dom";
import axios from "axios";

function Views(){
    const [review, setReview] = useState([]);

    useEffect(() => {
        axios.get('https://svaadisht-project.onrender.com/getrev')
            .then((data) => {
                setReview(data.data.revdata);
            });
            console.log(review)
    }, []);
    const del = (id) =>{
        axios.delete('https://svaadisht-project.onrender.com/deleterev/'+id)
        .then(res=>{console.log(res)
            alert("Data Deleted Successfully")
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <Navbar/>
            <br/><br/>

            <center>
                <h2 className="heading">Reviews and Viwes</h2>
                <br/>
                <table border={2} align="center" className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { review.length > 0 ? 
                        <> 
                            {review.map((rev,index,arr) => (
                                <tr key={rev._id}>
                                    <td>{index + 1}</td>
                                    <td>{rev.name}</td>
                                    <td>{rev.email}</td>
                                    <td>{rev.comments}</td>
                                    <td><button  type="button" onClick={()=>del(rev._id)} className="button">Delete</button></td>
                                </tr>
                            ))}
                        </>: " data loading " }
                    </tbody>
                </table>
            </center>
        </div>
    )
}
export default Views