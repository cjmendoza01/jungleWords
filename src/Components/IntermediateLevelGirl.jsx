import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntermediateLevelGirl.css";
import ints1 from "../assets/buttons&dialogues/ints1.png";
import ints2 from "../assets/buttons&dialogues/ints2.png";
import ints3 from "../assets/buttons&dialogues/ints3.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import
import Msc from "/Music.mp3";
import vid from "/BGAnimationGirl.mp4";
const IntermediateLevelGirl = () => {
	const navigate = useNavigate();
	const [selectedStage, setSelectedStage] = useState(null);

	// Automatically navigate after stage selection
	const handleStageClick = (stage) => {
		setSelectedStage(stage);
		if (stage === "IS1") {
			navigate("/GirlIS1intro");
		} else if (stage === "IS2") {
			navigate("/GirlIS2intro");
		} else if (stage === "IS3") {
			navigate("/GirlIS3intro");
		} else {
			alert("Please select a valid stage");
		}
	};

	const handleBackClick = () => {
		navigate("BeginnerLevelGirl"); // Go back to the previous page
	};

	return (
		<div className="intermediatelevelGirl">
			<video autoPlay muted loop className="background-video">
				<source src={vid} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<audio autoPlay loop src={Msc} />
			{/* Back button in the upper left corner */}
			<div className="back-button-container">
				<button onClick={handleBackClick} className="back-button">
					<img src={backButtonImage} alt="Back" />
				</button>
			</div>

			<div className="buttons">
				<button
					onClick={() => handleStageClick("IS1")}
					className={`intStage1 ${selectedStage === "IS1" ? "selected" : ""}`}
				>
					<img src={ints1} alt="i1" />
				</button>
				<button
					onClick={() => handleStageClick("IS2")}
					className={`intStage2 ${selectedStage === "IS2" ? "selected" : ""}`}
				>
					<img src={ints2} alt="i2" />
				</button>
				<button
					onClick={() => handleStageClick("IS3")}
					className={`intStage3 ${selectedStage === "IS3" ? "selected" : ""}`}
				>
					<img src={ints3} alt="i3" />
				</button>
			</div>
		</div>
	);
};

export default IntermediateLevelGirl;
