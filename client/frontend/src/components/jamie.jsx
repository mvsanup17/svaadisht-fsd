import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import Navbar from "./navbar";
// import imgs from "../images/food.webp";

function Jamie(){
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="jamie" className="img-fluid" /> */}
                        <img src={`https://svaadisht-project.onrender.com/details/file_1705230509012.avif`} alt="jamie" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Jamie Oliver</h2>
                        <p>
                            Jamie Oliver is a renowned British chef, restaurateur, cookbook author, and television personality. 
                            He is known for his dedication to making cooking and
                            good food accessible to everyone and for advocating for healthier eating habits.
                        </p>
                    </div>
                </div>
            </div>

            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <br/>
                        <h2 className="heading">Signature Dishes</h2>
                        <br/>
                        <p>
                            Jamie Oliver is known for his passion for fresh, seasonal ingredients and for creating dishes 
                            that are both delicious and nutritious. While he doesn't have a single favorite food, he has expressed a love for simple,
                            well-prepared dishes that celebrate the natural flavors of ingredients.
                            Some of the foods and cuisines he enjoys include:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>Italian Cuisine: </b> Oliver has a deep affection for Italian food, particularly dishes like pasta, risotto, and wood-fired pizza. 
                                He often emphasizes the importance of using high-quality ingredients in Italian cooking.
                            </li>

                            <br/>

                            <li>
                                <b>Fresh Seafood: </b> Given his British background,
                                Oliver enjoys fresh seafood, such as fish and shellfish, prepared with simple and flavorful seasonings.
                            </li>

                            <br/>

                            <li>
                                <b>Vegetables: </b> He is a strong advocate for incorporating more vegetables into meals.
                                Dishes that highlight seasonal vegetables are among his favorites.
                            </li>

                        </ol>

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
export default Jamie