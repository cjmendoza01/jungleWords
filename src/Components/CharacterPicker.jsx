import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterPicker.css";
import boyImage from "../assets/SANDER.gif";
import girlImage from "../assets/SANDY.gif";
import chooseIcon from "../assets/buttons&dialogues/choosecharac.png";
import doneButtonImage from "../assets/buttons&dialogues/done.png";
import MSC from "/Music.mp3";

const CharacterPicker = () => {
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const navigate = useNavigate();

	const handleCharacterSelect = (character) => {
		setSelectedCharacter(character);
	};

	const handleDoneClick = () => {
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

	return (
		<div className="CharacterPicker">
			<audio autoPlay loop src={MSC} />
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
		</div>
	);
};

export default CharacterPicker;
