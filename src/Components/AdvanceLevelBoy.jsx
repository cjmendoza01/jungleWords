import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdvanceLevelBoy.css";
import advs1 from "../assets/buttons&dialogues/advs1.png";
import advs2 from "../assets/buttons&dialogues/advs2.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import

const AdvanceLevelBoy = () => {
	const navigate = useNavigate();
	const [selectedStage, setSelectedStage] = useState(null);

	// Automatically navigate after stage selection
	const handleStageClick = (stage) => {
		setSelectedStage(stage);
		if (stage === "AS1") {
			navigate("/BoyADV1intro");
		} else if (stage === "AS2") {
			navigate("/BoyADV2intro");
		} else if (stage === "AS3") {
			navigate("/stage3"); // Adjust this route as needed
		} else {
			alert("Please select a valid stage");
		}
	};

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};

	return (
		<div className="advancelevelBoy">
			<video autoPlay muted loop className="background-video">
				<source src="/BGAnimationBoy.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<audio autoPlay loop src={"/Music.mp3"} />
			{/* Back button */}
			<div className="back-button-container">
				<button onClick={handleBackClick} className="back-button">
					<img src={backButtonImage} alt="Back" />
				</button>
			</div>
			<div className="buttonsss">
				<button
					onClick={() => handleStageClick("AS1")}
					className={`advStage1 ${selectedStage === "AS1" ? "selected" : ""}`}
				>
					<img src={advs1} alt="a1" />
				</button>
				<button
					onClick={() => handleStageClick("AS2")}
					className={`advStage2 ${selectedStage === "AS2" ? "selected" : ""}`}
				>
					<img src={advs2} alt="a2" />
				</button>
				<button
					onClick={() => handleStageClick("AS3")}
					className={`advStage3 ${selectedStage === "AS3" ? "selected" : ""}`}
				></button>
			</div>
		</div>
	);
};

export default AdvanceLevelBoy;
