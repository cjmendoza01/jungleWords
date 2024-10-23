import React from "react";
import "./AboutUs.css";

function SupportSDES() {
	return (
		<div id="aboutus">
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
							<img src="/spedSup.png" alt="Your Image Alt Text" />
							<h1>
								JungleWords is a 2D game-based interactive learning focusing on
								enhancing speech and language development for children with
								special needs at San Diego Elementary School. It has distinct
								levels aligned with San Diego Elementary School’s SPED
								curriculum and tailored for users with Children with Autism
								(CWA) and Intellectual Disabilities (ID), specifically Levels 2
								and 3. Its goal is to engage students in speech exercises and
								phonological awareness through the game.
								<h1>
									JungleWords is customized with level progressions, namely:
									Beginner Level encapsulated with Word Sounds, Short Vowels,
									and 3-word CVC; Intermediate Level encapsulated with Long
									Vowels, Word Family, and 4-word CVC; and Advanced Level
									encapsulated with Phrases and Sentences.
								</h1>
							</h1>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default SupportSDES;
