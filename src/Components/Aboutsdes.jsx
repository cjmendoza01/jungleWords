import React from "react";
import "./AboutUs.css";

function Aboutsdes() {
	return (
		<div id="aboutsdes">
			<div className="App">
				<header>
					<audio autoPlay loop src={"/BgMusic.mp3"} />
					<nav className="nav">
						<div className="logo">
							<img src="/Logo.png" alt="JW Logo" />
						</div>
						<div className="nav-linksz">
							<a href="/" className="home-linkz">
								<img src="/home.png" alt="Home" />
							</a>
							
						</div>
					</nav>
				</header>
				<main>
					<div className="jungle-background">
						<div className="contents">
							<img src="/abtSd.png" alt="Your Image Alt Text" /> <br></br> 
							<h1>
							San Diego Elementary School, located in Batasan Hills, Quezon City, offers a robust Special Education (SPED) 
							program catering to the unique needs of learners with disabilities. The school provides specialized services 
							such as a Non-Graded Program, a Transition Program, and a SPED-Graded Program specifically 
							for Deaf learners. These programs are designed to foster inclusivity and help students transition smoothly 
							into mainstream education or prepare them for life skills. The school's commitment to inclusive education 
							ensures tailored support for each student's development and learning potential.

							</h1>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Aboutsdes;
