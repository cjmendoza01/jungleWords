import React from "react";
import "./ItemManagementG1.css";
import chooseIcon from "../assets/buttons&dialogues/itemManagement.png";
import replayButtonImage from "../assets/buttons&dialogues/replayButton.png";
import nextButtonImage from "../assets/buttons&dialogues/neksButton.png";
import MSC from "/Music.mp3";

const ItemManagementG1 = () => {
	return (
		<div className="ItemManagement">
			<audio autoPlay loop src={MSC} />
			<div className="header">
				<img src={chooseIcon} alt="Item Management" />
			</div>

			<div className="items">
				{/* Main item box */}
				<div className="main-box">
					<div className="item">🥬</div>
					<div className="item">🍇</div>
					<div className="item">🍅</div>
					<div className="item">🍋</div>
					<div className="item">🥚</div>
					<div className="item">🍆</div>
					<div className="item">🍔</div>
					<div className="item">🍊</div>
					<div className="item">🥬</div>
					<div className="item">🍇</div>
					<div className="item">🍅</div>
					<div className="item">🍋</div>
					<div className="item">🥚</div>
					<div className="item">🍆</div>
					<div className="item">🍔</div>
					<div className="item">🍊</div>
				</div>

				{/* Additional box */}
				<div className="additional-box">
					<div className="item">🥬</div>
					<div className="item">🍇</div>
					<div className="item">🍋</div>
					<div className="item">🍔</div>
					<div className="item">🍊</div>
				</div>
			</div>

			<div className="navigation-buttons">
				<button className="replay-button">
					<img src={replayButtonImage} alt="Replay" />
				</button>
				<button className="next-button">
					<img src={nextButtonImage} alt="Next" />
				</button>
			</div>
		</div>
	);
};

export default ItemManagementG1;
