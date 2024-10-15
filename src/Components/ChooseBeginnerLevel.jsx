import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseBeginnerLevel.css";
import girlImage from "../assets/girl.png";
import begs1 from "../assets/buttons&dialogues/begs1.png";
import begs2 from "../assets/buttons&dialogues/begs2.png";
import begs3 from "../assets/buttons&dialogues/begs3.png";
import doneButton from "../assets/buttons&dialogues/done.png";
import welcome from "../assets/buttons&dialogues/welcome.png";
import MSC from "/BgMusic.mp3";

const ChooseBeginnerLevel = () => {
	const navigate = useNavigate();
	const [selectedStage, setSelectedStage] = useState(null);

	const handleStageClick = (stage) => {
		setSelectedStage(stage);
	};

	const handleDoneClick = () => {
		if (selectedStage === "BS1") {
			navigate("/DragAndDrop1");
		} else {
			// Navigate to different routes for other stages
			if (selectedStage === "BS2") {
				navigate("/Stage2Page");
			} else if (selectedStage === "BS3") {
				navigate("/Stage3Page");
			} else {
				alert("Please select a stage");
			}
		}
	};

	return (
		<div className="beginnerlevel">
			<audio autoPlay loop src={MSC} />
			<img src={girlImage} alt="Girl" className="girl-image" />
			<div className="speech-bubble">
				<img src={welcome} alt="Please choose your level" />
			</div>
			<div className="buttons">
				<button
					onClick={() => handleStageClick("BS1")}
					className={`button ${selectedStage === "BS1" ? "selected" : ""}`}
				>
					<img src={begs1} alt="s1" />
				</button>
				<button
					onClick={() => handleStageClick("BS2")}
					className={`button ${selectedStage === "BS2" ? "selected" : ""}`}
				>
					<img src={begs2} alt="s2" />
				</button>
				<button
					onClick={() => handleStageClick("BS3")}
					className={`button ${selectedStage === "BS3" ? "selected" : ""}`}
				>
					<img src={begs3} alt="s3" />
				</button>
				<button onClick={handleDoneClick} className="button done-button">
					<img src={doneButton} alt="Done" />
				</button>
			</div>
		</div>
	);
};

export default ChooseBeginnerLevel;
