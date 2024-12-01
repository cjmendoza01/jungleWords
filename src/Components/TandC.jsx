import React from "react";
import "./SPED.css";

function TandC() {
	return (
		<div id="specEd">
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
					<div className="jungle-background-sped">
						<div className="contents_spec_ed">
							<div
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
								}}
							>
							</div>
							<div className="text-content">
								<h2>
                                    <br></br> <br></br>
									{" "}
									TERMS AND CONDITIONS 

								</h2>
								<p>
								This is a reminder that by continuing to play this game, 
                                you are confirming that you have already read and accepted 
                                the terms and conditions provided by the San Diego Elementary School SpEd Teachers. 
                                These terms are designed to ensure respectful, inclusive, and fair gameplay for everyone.


								</p>

								<p>
                                Please remember that the game may access your device’s camera for gameplay purposes,
                                 and any data collected will be handled securely 
                                 and in compliance with the guidelines you’ve accepted.
                                </p>
                                <p>
                                Thank you for adhering to these rules as you enjoy the game!


                                </p>


								

								
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default TandC;
