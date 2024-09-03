import React, { useEffect, useState } from "react";
import { randonFoodGetter } from "../utils/imageAssetPicker";
import { vowelChecker } from "../utils/checker";
import { Qfilters } from "../utils/formatter";
import { useLocation } from "react-router-dom";

import DisplayModal from "./Modals/DisplayModal";

import Banana from "../assets/bs2/bs2banana.png";
import Boy from "../assets/boy.png";
import Girl from "../assets/girl.png";
import CheckModal from "./Modals/CheckModal";

export default function Stage2() {
	const [bananaCount, setBananaCount] = useState(9);
	const [questions, setQuestions] = useState([]);

	const [openCheckModal, setOpenCheckModal] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [disabledChoices, setDisabledChoices] = useState([]);

	const [gender, setGender] = useState("boy");
	const [level, setLevel] = useState(1);
	const choices = ["A", "E", "I", "O", "U"];

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	useEffect(() => {
		if (questions.length === 0 && !gameComplete) {
			const items = randonFoodGetter(9);
			setQuestions(items);
			console.log(items);
			setTimeout(() => {
				setOpenModal(true);
			}, 500);
		}
	}, [questions, gameComplete]);

	useEffect(() => {
		const gends = ["girl", "boy"];
		console.log("QGender");
		console.log(qGender);
		if (qGender && gends.includes(qGender)) {
			setGender(qGender);
		}
	}, [qGender]);

	useEffect(() => {
		if (openCheckModal) {
			setTimeout(() => {
				setOpenCheckModal(false);
			}, 2000);
			const bnLen = bananaCount;
			console.log("bananacount :", bnLen);
			console.log(bananaCount);
			if (bnLen > 0) {
				setTimeout(() => {
					setOpenModal(true);
				}, 2500);
			}
		}
	}, [openCheckModal]);

	useEffect(() => {
		if (openModal) {
			setTimeout(() => {
				setOpenModal(false);
			}, 6000);
		}
	}, [openModal]);

	useEffect(() => {
		if (gameComplete) {
			//route to animation page
		}
	}, [gameComplete]);

	const handleButtonClick = async (ch) => {
		const rightAns = questions[0];

		const right = await vowelChecker(ch, rightAns);

		if (right) {
			console.log("Right");
			const filtered = await Qfilters(rightAns, questions);

			setQuestions(filtered);

			if (bananaCount - 1 === 0) {
				setGameComplete(true);
			} else {
				setBananaCount((prevCount) => {
					const newCount = prevCount - 1;
					return newCount;
				});

				setDisabledChoices([]);

				setTimeout(() => {
					setOpenCheckModal(true);
				}, 500);
			}
		} else {
			console.log("Wrong");
			setDisabledChoices([...disabledChoices, ch]);
		}
	};

	return (
		<div className="main" style={{ display: "block" }}>
			<div className="stage2-upper-div">
				<div className="stage2-upper2-div">
					<div
						style={{
							width: "80%",
							display: "flex",
							alignItems: "end",
							justifyContent: "right",
						}}
					>
						<div className="stage-2-character-div">
							<img
								className="stage-2-char-div"
								src={gender === "boy" ? Boy : Girl}
							/>
						</div>
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
					<div className="stage2-monkey-div">
						<img className="stage2-monkey-img" src={Boy} />
					</div>
				</div>
			</div>

			<div className="stage2-lower-div">
				<div className="stage-2-button-div">
					{choices.map((ch) => {
						return (
							<button
								key={ch}
								className={`stage-2-button-div-item ${
									disabledChoices.includes(ch) ? "button-stage2-error" : ""
								}`}
								onClick={() => handleButtonClick(ch)}
								disabled={disabledChoices.includes(ch) ? true : false}
							>
								{ch}
							</button>
						);
					})}
				</div>
			</div>
			{openModal ? <DisplayModal item={questions[0]} /> : <></>}
			{openCheckModal ? <CheckModal /> : <></>}
		</div>
	);
}
