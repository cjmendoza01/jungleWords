import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BeginnerLevelBoy.css";
import begs1 from "../assets/buttons&dialogues/begs1.png";
import begs2 from "../assets/buttons&dialogues/begs2.png";
import begs3 from "../assets/buttons&dialogues/begs3.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import

const BeginnerLevelBoy = () => {
	const navigate = useNavigate();
	const [selectedStage, setSelectedStage] = useState(null);

	// Automatically navigate after stage selection
	const handleStageClick = (stage) => {
		setSelectedStage(stage);
		if (stage === "BS1") {
			navigate("/BoyBS1intro");
		} else if (stage === "BS2") {
			navigate("/BoyBS2intro");
		} else if (stage === "BS3") {
			navigate("/BoyBS3intro");
		} else {
			alert("Please select a valid stage");
		}
	};

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};

	return (
		<div className="beginnerlevelBoy">
			<video autoPlay muted loop className="background-video">
				<source src="/BGAnimationBoy.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<audio autoPlay loop src={"/Music.mp3"} />
			{/* Back button in the upper left corner */}
			<div className="back-button-container">
				<button onClick={handleBackClick} className="back-button">
					<img src={backButtonImage} alt="Back" />
				</button>
			</div>

			<div className="buttons">
				<button
					onClick={() => handleStageClick("BS1")}
					className={`begStage1 ${selectedStage === "BS1" ? "selected" : ""}`}
				>
					<img src={begs1} alt="s1" />
				</button>
				<button
					onClick={() => handleStageClick("BS2")}
					className={`begStage2 ${selectedStage === "BS2" ? "selected" : ""}`}
				>
					<img src={begs2} alt="s2" />
				</button>
				<button
					onClick={() => handleStageClick("BS3")}
					className={`begStage3 ${selectedStage === "BS3" ? "selected" : ""}`}
				>
					<img src={begs3} alt="s3" />
				</button>
			</div>
		</div>
	);
};

export default BeginnerLevelBoy;
