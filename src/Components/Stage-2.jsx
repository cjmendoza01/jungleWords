import React, { useEffect, useState } from "react";
import { randomVowelGetter, randonItemGetter } from "../utils/imageAssetPicker";
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
	const [tries, setTry] = useState(0);
	const eggs = [egg1, egg2, egg3, egg4, egg5, egg6, egg7, egg8];

	const [openCheckModal, setOpenCheckModal] = useState(false);
	const [removeBanana, setRemoveBanana] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [disabledChoices, setDisabledChoices] = useState([]);
	const [correctButton, setCorrectButton] = useState("");
	const [openNextGameModal, setNextGameModal] = useState(false);

	const [gender, setGender] = useState("boy");
	const choices = ["A", "E", "I", "O", "U"];

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	const [numRight, setNumRight] = useState(0);

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
		if ((questions.length === 0 && !gameComplete) || resetGame) {
			setRemoveBanana(false);

			if (resetGame) {
				setResetGame(false);
				setGameComplete(false);
				setNextGameModal(false);
			}
			const items = randomVowelGetter(8, level);
			setQuestions(items);
			setBananaCount(items.length);

			setTimeout(() => {
				setOpenModal(true);
			}, 5000);
		}

		if (gameComplete && !resetGame) {
			setTimeout(() => {
				// Gonzo animation
				setNextGameModal(true);
			}, 5000);
		}
	}, [questions, gameComplete, resetGame]);

	useEffect(() => {
		const gends = ["girl", "boy"];

		if (qGender && gends.includes(qGender)) {
			setGender(qGender);
		}
	}, [qGender]);

	const unRmvBanana = () => {
		setRemoveBanana(false);
	};

	useEffect(() => {
		if (openCheckModal) {
			setTimeout(() => {
				setCorrectButton("");
			}, 1000);

			setRemoveBanana(false);

			setTimeout(() => {
				setOpenCheckModal(false);
			}, 2000);

			if (bananaCount > 0) {
				setTimeout(() => {
					setOpenModal(true);
				}, 2500);
			}

			if (!gameComplete) {
				setBananaCount((prevCount) => {
					const newCount = prevCount - 1;
					return newCount;
				});
			}
		}
	}, [openCheckModal]);

	const maxClick = async () => {
		const rightAns = questions[0];
		setTry(0);
		setRemoveBanana(true);

		const filtered = await Qfilters(rightAns, questions);

		setQuestions(filtered);

		setTimeout(() => {
			unRmvBanana();
			if (bananaCount - 1 !== 0)
				setBananaCount((prevCount) => {
					const newCount = prevCount - 1;
					return newCount;
				});
		}, 500);

		if (bananaCount - 1 === 0) {
			setGameComplete(true);
		} else {
			setDisabledChoices([]);
			setTimeout(() => {
				setOpenModal(true);
			}, 1000);
		}
	};

	const handleButtonClick = async (ch) => {
		const rightAns = questions[0];

		const right = await vowelChecker(ch, rightAns);

		if (right) {
			setRemoveBanana(true);
			setCorrectButton(ch);

			const filtered = await Qfilters(rightAns, questions);

			setQuestions(filtered);

			setDisabledChoices([]);

			if (bananaCount - 1 === 0) {
				setGameComplete(true);
				setTimeout(() => {
					setCorrectButton("");
				}, 1000);
			} else {
				setTimeout(() => {
					setOpenCheckModal(true);
				}, 500);
			}

			let rs = numRight;
			setNumRight(rs++);
		} else {
			setDisabledChoices([...disabledChoices, ch]);

			let i = tries + 1;

			setTry(i);
			if (i >= 3) {
				// setTimeout(() => {
				maxClick();
				// }, 500);
			}
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
		navigate(-1);
	};

	return (
		<div className="stage2-main main" style={{ display: "block" }}>
			<video
				autoPlay
				muted
				loop
				style={{
					position: "fixed", // Ensures it stays in the background
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover", // Stretches the video to cover the whole screen
					zIndex: "1", // Places the video behind the game content
				}}
			>
				<source src="/bgstage2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			{/* Back button in the upper left corner */}
			<button className="backButton" onClick={handleBackClick}>
				<img src={backButtonImage} alt="Back" />
			</button>

			<div
				style={{
					width: "100vw",
					height: "100vh",
					position: "absolute",
					zIndex: "2",
				}}
			>
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
