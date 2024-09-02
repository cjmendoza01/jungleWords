import React, { useState } from "react";

import Banana from "../assets/bs2/bs2banana.png";
import Beans from "../assets/foods/Beans.png"; // Make sure this import is correct and used

const Tester = () => {
	const [bananaCount, setBananaCount] = useState(6);

	const handleButtonClick = () => {
		// Reduce the banana count to trigger re-rendering
		setBananaCount((prevCount) => {
			// Animate the last banana out using CSS
			const newCount = prevCount - 1;
			return newCount;
		});
	};

	return (
		<div className="tester-container">
			<button className="tester-Button" onClick={handleButtonClick}>
				Eat Banana
			</button>
			<div className="tester-image-container">
				{/* Render banana images */}
				{Array.from({ length: bananaCount }, (_, index) => (
					<img
						className={`testr-img ${
							index === bananaCount - 1 ? "animate-bananaFall" : ""
						}`}
						src={Banana}
						alt="Banana"
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Tester;
