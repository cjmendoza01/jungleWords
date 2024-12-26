import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemManagement.css";

const ItemManagement = () => {
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
