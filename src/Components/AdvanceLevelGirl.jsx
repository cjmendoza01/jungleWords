import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdvanceLevelGirl.css";
import girlImage from "../assets/girl.png";
import advs1 from "../assets/buttons&dialogues/advs1.png";
import advs2 from "../assets/buttons&dialogues/advs2.png";
import doneButton from "../assets/buttons&dialogues/beginNext.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import

const AdvanceLevelGirl = () => {
	const navigate = useNavigate();
	const [selectedStage, setSelectedStage] = useState(null);

	const handleStageClick = (stage) => {
		setSelectedStage(stage);
	};

	const handleDoneClick = () => {
		if (selectedStage === "AS1") {
			navigate("/GirlADV1intro");
		} else {
			// Navigate to different routes for other stages
			if (selectedStage === "AS2") {
				navigate("/GirlADV2intro");
			} else if (selectedStage === "AS3") {
				navigate("/stage3");
			} else {
				alert("Please select a stage");
			}
		}
	};
	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};

	return (
		<div className="advancelevelBoy">
			<video autoPlay muted loop className="background-video">
				<source src="/BGAnimationGirl.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<audio autoPlay loop src={"/BgMusic.mp3"} />
			<div className="back-button-container">
				<button onClick={handleBackClick} className="back-button">
					<img src={backButtonImage} alt="Back" />
				</button>
			</div>
			<div className="buttons">
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
				<button onClick={handleDoneClick} className="buttonLevel done-button">
					<img src={doneButton} alt="Done" />
				</button>
			</div>
		</div>
	);
};

export default AdvanceLevelGirl;
