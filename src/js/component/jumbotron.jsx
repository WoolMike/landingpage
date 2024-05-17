import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";

//create your first component
const Jumbotron = () => {
	return (
		<div>
			<div className="col-md-8 offset-md-2">
             <div className="jumbotronhead">
                <div className="head">
                    <h1>A Warm Welcome</h1>
                    <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid aut facilis temporibus nisi quia, ducimus expedita ab quasi nulla accusantium pariatur, voluptatum, eligendi fugiat magnam illum autem tempore odit!</p>
                    <button type="button" className="btn btn-primary">Call to action</button>
                </div>
                
             </div>
            </div>
		</div>
	);
};

export default Jumbotron;