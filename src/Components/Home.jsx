import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import startButtonImage from "../assets/buttons&dialogues/start.png"; // Ensure this path is correct
import audioSound from "/Music.mp3";
import bg from "/main.mp4";
function Home() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/CharacterPicker");
	};

	return (
		<div className="App">
			<header>
				<nav>
					<div className="logo">
						<audio autoPlay loop src={audioSound} />
						<img
							src="/Logo.png"
							alt="JW Logo"
							style={{ userSelect: "none" }}
							data-edge="visualsearch:no"
						/>
					</div>
					<div className="nav-links">
						<a href="/" className="home-link">
							<img src="/home.png" alt="Home" style={{ userSelect: "none" }} />
						</a>
						<a className="aboutus-link" onClick={() => navigate("/AboutUs")}>
							<img
								src="/aboutuss.png"
								alt="About Us"
								style={{ userSelect: "none" }}
							/>
						</a>
					</div>
				</nav>
			</header>
			<main>
				<video autoPlay muted loop className="video-background">
					<source src={bg} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<div className="jungle-background">
					<div className="content">
						<img
							src="/Title.png"
							alt="Your Image Alt Text"
							style={{ userSelect: "none" }}
							data-edge="visualsearch:no"
						/>
						<br></br>

						<div className="wooden-sign">
							<button onClick={handleClick} className="startButton">
								<img
									src={startButtonImage}
									alt="Start"
									className="startButtonImage"
									style={{ userSelect: "none" }}
									data-edge="visualsearch:no"
								/>
							</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
