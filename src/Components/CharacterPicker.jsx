import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterPicker.css";
import boyImage from "../assets/BOY.gif";
import girlImage from "../assets/GIRL.gif";
import chooseIcon from "../assets/buttons&dialogues/choosecharac.png";
import doneButtonImage from "../assets/buttons&dialogues/done.png";
import termsAndConImage from "../assets/buttons&dialogues/termsAndcon.png";
import agreeButtonImage from "../assets/buttons&dialogues/agreeButton.png";
import disagreeButtonImage from "../assets/buttons&dialogues/disButton.png";

const CharacterPicker = () => {
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [termsAccepted, setTermsAccepted] = useState(false);
	const [showTerms, setShowTerms] = useState(true);
	const navigate = useNavigate();

	const handleCharacterSelect = (character) => {
		setSelectedCharacter(character);
	};

	const handleDoneClick = () => {
		if (!termsAccepted) {
			alert("Please accept the terms and conditions");
			return;
		}
		if (selectedCharacter) {
			if (selectedCharacter === "boy") {
				navigate("/boy-video");
			} else if (selectedCharacter === "girl") {
				navigate("/girl-video");
			}
		} else {
			alert("Please select a character");
		}
	};

	const handleTermsAccept = () => {
		setTermsAccepted(true);
		setShowTerms(false);
	};

	const handleTermsDisagree = () => {
		navigate("/");
	};

	return (
		<div className="CharacterPicker">
			{showTerms && (
				<div className="terms-popup">
					<div className="terms-content">
						<audio autoPlay loop src={"/Music.mp3"} />
						<img
							src={termsAndConImage}
							alt="Terms and Conditions"
							className="terms-image"
						/>
						<div className="terms-buttons">
							<button onClick={handleTermsAccept} className="agree-button">
								<img src={agreeButtonImage} alt="I Agree" />
							</button>
							<button onClick={handleTermsDisagree} className="disagree-button">
								<img src={disagreeButtonImage} alt="I Disagree" />
							</button>
						</div>
					</div>
				</div>
			)}
			{!showTerms && (
				<>
					<div className="chooseIcon">
						<img src={chooseIcon} alt="Choose Character" />
					</div>

					<div className="characters">
						<div
							className={`character-option ${
								selectedCharacter === "boy" ? "selected" : ""
							}`}
							onClick={() => handleCharacterSelect("boy")}
						>
							<img src={boyImage} alt="Boy" className="character-boy" />
						</div>
						<div
							className={`character-option ${
								selectedCharacter === "girl" ? "selected" : ""
							}`}
							onClick={() => handleCharacterSelect("girl")}
						>
							<img src={girlImage} alt="Girl" />
						</div>
					</div>

					<div className="wooden-sign">
						<button className="done-button" onClick={handleDoneClick}>
							<img
								src={doneButtonImage}
								alt="Done"
								className="doneButtonImage"
							/>
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default CharacterPicker;
