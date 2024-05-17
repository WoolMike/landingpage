import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="row">
				<div className="col">
					<Card></Card>
				</div>
				<div className="col">
					<Card></Card>
				</div>
				<div className="col">
					<Card></Card>
				</div>
				<div className="col">
					<Card></Card>
				</div>

			</div>


		</div>
	);
};

export default Home;
