import React from "react";
import Navbar from "./navbar";
import './styles/detailings.css';
import logo from '../images/1.png';
import video from '../images/video.mp4';
import axios from "axios";
import {useState} from "react";

const Reviewform = () => {
    const [revForm, setRevForm] = useState({
        'name':'',
        'email':'',
        'comments':''
    })

    const formSubmit =(e)=>{
        e.preventDefault();
        console.log(revForm)
        axios.post("https://svaadisht-project.onrender.com/addsubmit",{revForm})
        .then((res)=>alert(res.data.msg))
        window.location.reload()
    }

    return(
        <div>
            <form onSubmit={formSubmit} action="post" className="needs-validation" noValidate method="POST" data-netlify="true">
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" id="name" 
                    onChange={(e)=> setRevForm({...revForm,name:e.target.value})} required/>
                    <div className="invalid-feedback">
                        Please provide a valid name.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="form-control" id="email" 
                        onChange={(e)=> setRevForm({...revForm,email:e.target.value})} required/>
                        <div className="invalid-feedback">
                            Please provide a valid email.
                        </div>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="comments">Review</label>
                    <textarea type="text" rows={8} cols={70} name="comments" className="form-control" id="comments"
                    onChange={(e)=> setRevForm({...revForm,comments:e.target.value})} required/>
                    <div className="invalid-feedback">
                        Please provide a valid review.
                    </div>
                </div>

                <br/>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    ) 
}  

function About() {
    return(
        <div>
            <Navbar/>
            <br/>
            <h1 className="text-center heading">ABOUT US</h1>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>About Svaadisht</h2>
                        <p>
                            Svaadisht is your gateway to the world of culinary delights. We are passionate about food, cooking,
                            and sharing the joy of exploring different flavors and cuisines. 
                            Our mission is to bring the art of cooking to your home and inspire you to create delicious meals.

                            <br/>

                            Whether you're an experienced chef or just starting your culinary journey, Svaadisht has something for everyone. 
                            From mouthwatering recipes to insights from renowned chefs, you'll find a treasure trove of food-related content here.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img src={logo} alt="logo" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <br/><br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Review Form</h2>
                        <br/>
                        <Reviewform/>
                    </div>

                    <div className="col-lg-6">
                        <h2>Video On Svaadisht</h2>
                        <br/>
                        <video loop autoPlay width="100%" height="40%" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            <footer className="bg-dark py-5 mt-5">
                <div className="container text-light text-center">
                    <p className="display-5 mb-3">Svaadisht</p>
                    <small className="text-white-50">svaadisht@gmail.com</small>
                    <br/>
                    <small className="text-white-50">&copy; Copyright by Tech Mavericks. All right reserved.</small>
                </div>
            </footer>
            
        </div>
    )
}
export default About