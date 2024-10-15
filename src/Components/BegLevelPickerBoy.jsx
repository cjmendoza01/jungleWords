import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BegLevelPickerBoy.css";
import begButton from "../assets/buttons&dialogues/begButton.png";
import intButton from "../assets/buttons&dialogues/intButton.png";
import advButton from "../assets/buttons&dialogues/advButton.png";
import lockImage from "../assets/buttons&dialogues/lock.png";
import accessCodeImage from "../assets/buttons&dialogues/accessCode.png";
import doneButton from "../assets/buttons&dialogues/done.png";
import beginX from "../assets/buttons&dialogues/beginX.png"; // Import the X button image
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import
import boyVid from "/BGAnimationBoy.mp4";

const BegLevelPickerBoy = () => {
	const navigate = useNavigate();
	const [selectedLevel, setSelectedLevel] = useState(null);
	const [accessCode, setAccessCode] = useState("");
	const [showAccessCodeInput, setShowAccessCodeInput] = useState(false);

	const handleStageClick = (level) => {
		setSelectedLevel(level);
		setShowAccessCodeInput(true); // Automatically show access code input
	};

	const handleDoneClick = () => {
		if (selectedLevel === "Beginner" && accessCode === "SanDiegoJWBeg") {
			navigate("/BeginnerLevelBoy");
		} else if (
			selectedLevel === "Intermediate" &&
			accessCode === "SanDiegoJWInt"
		) {
			navigate("/IntermediateLevelBoy");
		} else if (selectedLevel === "Advanced" && accessCode === "SanDiegoJWAdv") {
			navigate("/AdvanceLevelBoy");
		} else {
			alert("Please select a level and enter the correct access code");
		}
	};

	const handleCloseClick = () => {
		setShowAccessCodeInput(false);
		setAccessCode("");
		setSelectedLevel(null);
	};

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};

	return (
		<div className="chooselevelBoy">
			<video autoPlay muted loop className="background-video">
				<source src={boyVid} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<audio autoPlay loop src={"/Music.mp3"} />
			{/* Back button in the upper left corner */}
			<div className="nav-buttons">
				<button onClick={handleBackClick} className="nav-button back-button">
					<img src={backButtonImage} alt="Back" />
				</button>
			</div>
			<div className="buttons">
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("Beginner")}
						className={`beginButton ${
							selectedLevel === "Beginner" ? "selected" : ""
						}`}
					>
						<img src={begButton} alt="Beginner" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImages1" />
				</div>
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("Intermediate")}
						className={`interButton ${
							selectedLevel === "Intermediate" ? "selected" : ""
						}`}
					>
						<img src={intButton} alt="Intermediate" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImage2" />
				</div>
				<div className="buttonWithLock">
					<button
						onClick={() => handleStageClick("Advanced")}
						className={`advanButton ${
							selectedLevel === "Advanced" ? "selected" : ""
						}`}
					>
						<img src={advButton} alt="Advanced" />
					</button>
					<img src={lockImage} alt="Lock" className="lockImage3" />
				</div>
			</div>
			{showAccessCodeInput && (
				<div className="access-code-container">
					<img
						src={accessCodeImage}
						alt="Access Code"
						className="access-code-image"
					/>
					<input
						type="password" // Change this from "text" to "password"
						value={accessCode}
						onChange={(e) => setAccessCode(e.target.value)}
						className="access-code-input"
						placeholder="Enter Access Code"
					/>
					<button onClick={handleDoneClick} className="done-button-overlay">
						<img src={doneButton} alt="Done" />
					</button>
					<button onClick={handleCloseClick} className="close-button">
						<img src={beginX} alt="Close" />
					</button>
				</div>
			)}
		</div>
	);
};

export default BegLevelPickerBoy;
