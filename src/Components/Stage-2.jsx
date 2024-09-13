import React, { useEffect, useState } from "react";
import { randonItemGetter } from "../utils/imageAssetPicker";
import { vowelChecker } from "../utils/checker";
import { Qfilters } from "../utils/formatter";
import { useLocation, useNavigate } from "react-router-dom"; // Ensure useNavigate and useLocation are imported

import exitButton from "../assets/bs2/exitButton.png"; // Example import for the back button image
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // Importing back button image

import DisplayModal from "./Modals/DisplayModal";
import NextGameModal from "./Modals/NextGameModal";
import Banana from "../assets/bs2/banana.png";
import Basketfull from "../assets/bs2/basketfull.png";
import Girl from "../assets/bs2/girlBasketEmpty.png";
import Boy from "../assets/bs2/boyBasketEmpty.png";

import CheckModal from "./Modals/CheckModal";
import Gonzo from "../assets/bs2/Gonzo.png";

import egg1 from "../assets/is1/egg1.png";
import egg2 from "../assets/is1/egg2.png";
import egg3 from "../assets/is1/egg3.png";
import egg4 from "../assets/is1/egg4.png";
import egg5 from "../assets/is1/egg5.png";
import egg6 from "../assets/is1/egg6.png";
import egg7 from "../assets/is1/egg7.png";
import egg8 from "../assets/is1/egg8.png";

export default function Stage2() {
	const navigate = useNavigate(); // Enable navigation

	const [bananaCount, setBananaCount] = useState(9);
	const [questions, setQuestions] = useState([]);
	const [resetGame, setResetGame] = useState(false);

	const [nextRoute, setNextRoute] = useState("");

	const eggs = [egg1, egg2, egg3, egg4, egg5, egg6, egg7, egg8];

	const [openCheckModal, setOpenCheckModal] = useState(false);
	const [removeBanana, setRemoveBanana] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [disabledChoices, setDisabledChoices] = useState([]);
	const [correctButton, setCorrectButton] = useState("");
	const [openNextGameModal, setNextGameModal] = useState(true);

	const [gender, setGender] = useState("boy");
	const choices = ["A", "E", "I", "O", "U"];

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	useEffect(() => {
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}

		let lvl = "1";

		if (qLevel) {
			lvl = qLevel;
		}

		const nxtRt = `/stage3?gender=${gd}&level=${lvl}`;

		setNextRoute(nxtRt);
	}, [qGender, qLevel]);

	useEffect(() => {
		let level = 1;
		if (qLevel) {
			level = Number(qLevel);
		}
		if (questions.length === 0 && !gameComplete) {
			const items = randonItemGetter(8, level);
			setQuestions(items);
			setBananaCount(items.length);

			// setResetGame(false);
			// setNextGameModal(false);

			setTimeout(() => {
				setOpenModal(true);
			}, 5000);
		}

		if (gameComplete) {
			setTimeout(() => {
				// Gonzo animation
				setNextGameModal(true);
			}, 5000);
		}
	}, [questions, gameComplete]);

	useEffect(() => {
		setGameComplete(false);
		setResetGame(false);
		setNextGameModal(false);
	}, [resetGame]);

	useEffect(() => {
		const gends = ["girl", "boy"];

		if (qGender && gends.includes(qGender)) {
			setGender(qGender);
		}
	}, [qGender]);

	useEffect(() => {
		if (openCheckModal) {
			setTimeout(() => {
				setCorrectButton("");
			}, 1000);
			setRemoveBanana(false);
			setBananaCount((prevCount) => {
				const newCount = prevCount - 1;
				return newCount;
			});
			setTimeout(() => {
				setOpenCheckModal(false);
			}, 2000);

			if (bananaCount > 0) {
				setTimeout(() => {
					setOpenModal(true);
				}, 2500);
			}
		}
	}, [openCheckModal]);

	const handleButtonClick = async (ch) => {
		const rightAns = questions[0];

		const right = await vowelChecker(ch, rightAns);

		if (right) {
			setRemoveBanana(true);
			setCorrectButton(ch);

			const filtered = await Qfilters(rightAns, questions);

			setQuestions(filtered);

			if (bananaCount - 1 === 0) {
				setGameComplete(true);
			} else {
				setDisabledChoices([]);

				setTimeout(() => {
					setOpenCheckModal(true);
				}, 500);
			}
		} else {
			setDisabledChoices([...disabledChoices, ch]);
		}
	};

	const getFoodLogo = (index) => {
		let level = 1;
		if (qLevel) {
			level = Number(qLevel);
		}

		if (level === 2) {
			return eggs[index];
		}

		return Banana;
	};

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};

	return (
		<div className="stage2-main main" style={{ display: "block" }}>
			{/* Back button in the upper left corner */}
			<button className="backButton" onClick={handleBackClick}>
				<img src={backButtonImage} alt="Back" />
			</button>

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
								alt="Character"
							/>
						</div>

						<div className="tester-image-container">
							{Array.from({ length: bananaCount }, (_, index) => (
								<React.Fragment key={index}>
									{index === bananaCount - 1 ? (
										<button
											onClick={() => setOpenModal(true)}
											style={{ background: "transparent", border: "none" }}
										>
											<img
												className={`testr-img ${
													index === bananaCount - 1 && removeBanana
														? "animate-bananaFall"
														: ""
												}`}
												src={getFoodLogo(index)}
												alt="Banana"
											/>
										</button>
									) : (
										<img
											className={`testr-img ${
												index === bananaCount - 1 && removeBanana
													? "animate-bananaFall"
													: ""
											}`}
											src={getFoodLogo(index)}
											alt="Banana"
										/>
									)}
								</React.Fragment>
							))}
						</div>
					</div>

					<div className="stage2-monkey-div">
						<img className="stage2-monkey-img" src={Gonzo} alt="Gonzo" />
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
								} ${correctButton === ch ? "button-stage2-correct" : ""}`}
								onClick={() => handleButtonClick(ch)}
								disabled={disabledChoices.includes(ch)}
							>
								{ch}
							</button>
						);
					})}
				</div>
			</div>

			{openModal && (
				<DisplayModal
					item={questions[0]}
					closeModal={() => setOpenModal(false)}
				/>
			)}
			{openCheckModal && <CheckModal />}
			{gameComplete && (
				<div className="modal">
					<div className="modal-backdrop"></div>
					<div style={{ width: "20%", height: "20%" }}>
						<img
							style={{
								width: "100%",
								height: "100%",
								objectFit: "contain",
							}}
							src={Gonzo}
							alt="Gonzo"
						/>
					</div>
				</div>
			)}
			{openNextGameModal ? (
				<NextGameModal
					gender={gender}
					route={nextRoute}
					resetGame={() => setResetGame(true)}
				/>
			) : (
				<></>
			)} 
		</div>
	);
}
