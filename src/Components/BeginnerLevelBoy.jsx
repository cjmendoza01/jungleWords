import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BeginnerLevelBoy.css";
import girlImage from "../assets/girl.png";
import begs1 from "../assets/buttons&dialogues/begs1.png";
import begs2 from "../assets/buttons&dialogues/begs2.png";
import begs3 from "../assets/buttons&dialogues/begs3.png";
import doneButton from "../assets/buttons&dialogues/done.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import

const BeginnerLevelBoy = () => {
	const navigate = useNavigate();
	const [selectedStage, setSelectedStage] = useState(null);

	const handleStageClick = (stage) => {
		setSelectedStage(stage);
	};

	const handleDoneClick = () => {
		if (selectedStage === "BS1") {
			navigate("/BoyBS1intro");
		} else {
			if (selectedStage === "BS2") {
				navigate("/BoyBS2intro");
			} else if (selectedStage === "BS3") {
				navigate("/BoyBS3intro");
			} else {
				alert("Please select a stage");
			}
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
			<audio autoPlay loop src={"/BgMusic.mp3"} />
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
				<button onClick={handleDoneClick} className="buttonLevel done-button">
					<img src={doneButton} alt="Done" />
				</button>
			</div>
		</div>
	);
};

export default BeginnerLevelBoy;
