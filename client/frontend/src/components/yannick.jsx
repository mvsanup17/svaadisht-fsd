import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar";
// import imgs from "../images/food.webp";

function Yannick() {
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="yannick" className="img-fluid" /> */}
                        <img src={`https://svaadisht-project.onrender.com/details/file_1705230792704.jpeg`} alt="yannick" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Yannick Alleno</h2>
                        <p>
                            Yannick Alléno is a world-renowned French chef with a passion for
                            pushing the boundaries of culinary art.
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
                            Yannick Alléno's culinary repertoire features an extensive range of
                            French cuisine, with a particular focus on:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>Haute Cuisine: </b> His approach to cooking reflects
                                the elegance and refinement of French haute cuisine.
                            </li>

                            <br/>

                            <li>
                                <b>Seasonal Ingredients: </b> He prioritizes seasonal and
                                locally-sourced ingredients, ensuring the freshest flavors in his creations.
                            </li>

                            <br/>

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
export default Yannick