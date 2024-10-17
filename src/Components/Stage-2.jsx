import React, { useEffect, useState, useRef } from "react";
import { randomVowelGetter, randonItemGetter } from "../utils/imageAssetPicker";
import { vowelChecker } from "../utils/checker";
import { Qfilters, reShuffle } from "../utils/formatter";
import { useLocation, useNavigate } from "react-router-dom"; // Ensure useNavigate and useLocation are imported
import ErrorSound from "/Wrong.mp3";
import rightSound from "/Corect.mp3";
import exitButton from "../assets/bs2/exitButton.png"; // Example import for the back button image
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // Importing back button image

import DisplayModal from "./Modals/DisplayModal";
import NextGameModal from "./Modals/NextGameModal";
import Banana from "../assets/bs2/BananaGif.gif";
import Basketfull from "../assets/bs2/basketfull.png";
import Girl from "../assets/bs2/GirlBananas.gif";
import Boy from "../assets/bs2/BoyBananas.gif";
import GirlBasketEgg from "../assets/bs2/GirlEgg.gif";
import BoyBasketEgg from "../assets/bs2/BoyEgg.gif";
import CheckModal from "./Modals/CheckModal";
import Gonzo from "../assets/bs2/Gonzo.gif";
import HoneyBun from "../assets/is1/Honeybun.gif";
import egg1 from "../assets/is1/egg1.gif";
import egg2 from "../assets/is1/egg2.gif";
import egg3 from "../assets/is1/egg3.gif";
import egg4 from "../assets/is1/egg4.gif";
import egg5 from "../assets/is1/egg5.gif";
import egg6 from "../assets/is1/egg6.gif";
import egg7 from "../assets/is1/egg1.gif";
import egg8 from "../assets/is1/egg2.gif";
import BS1GonzoTY from "./BS1GonzoTY";
import { randomFoodItemGetter } from "../utils/gonzoBunny";

export default function Stage2(props) {
	const navigate = useNavigate(); // Enable navigation

	const stageLevel = props?.stageLevel || null;

	const [bananaCount, setBananaCount] = useState(9);
	const [questions, setQuestions] = useState([]);
	const [resetGame, setResetGame] = useState(false);
	const [stgLevel, setStgLevel] = useState("1");
	const [iconBoy, setIconBoy] = useState(Boy);
	const [iconGirl, setIconGirl] = useState(Girl);
	const [nextRoute, setNextRoute] = useState("");
	const [tries, setTry] = useState(0);
	const eggs = [egg1, egg2, egg3, egg4, egg5, egg6, egg7, egg8];

	const audioRef2 = useRef();
	const audioRef3 = useRef();

	const [openCheckModal, setOpenCheckModal] = useState(false);
	const [removeBanana, setRemoveBanana] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [disabledChoices, setDisabledChoices] = useState([]);
	const [correctButton, setCorrectButton] = useState("");
	const [openNextGameModal, setNextGameModal] = useState(false);
	const [openThankyou, setOpenThankyou] = useState(false);
	const [gender, setGender] = useState("boy");
	const choices = ["A", "E", "I", "O", "U"];

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	const [numRight, setNumRight] = useState(0);

	const playWrongSound = () => {
		if (audioRef2.current) {
			audioRef2.current.play();
		}
	};

	const playRightSound = () => {
		if (audioRef3.current) {
			audioRef3.current.play();
		}
	};

	useEffect(() => {
		let gd = "boy";

		if (qGender) {
			gd = qGender.toLowerCase();
		}

		let lvl = "1";

		if (stageLevel) {
			lvl = stageLevel;
		} else {
			if (qLevel) {
				lvl = qLevel;
			}
		}
		setStgLevel(lvl);

		let nxtRt = `BoyBS3intro`;

		if ((qLevel && qLevel === "2") || (stageLevel && stageLevel === "2")) {
			if (gd == "girl") {
				setIconGirl(GirlBasketEgg);
				nxtRt = `/GirlIS2intro`;
			} else {
				setIconGirl(BoyBasketEgg);
				nxtRt = `/BoyIS2intro`;
			}
		} else {
			if (gd == "girl") {
				nxtRt = `/GirlBS3intro`;
			} else {
				nxtRt = `/BoyBS3intro`;
			}
		}

		setNextRoute(nxtRt);
	}, [qGender, qLevel, stageLevel]);

	useEffect(() => {
		let level = 1;
		if (qLevel) {
			level = Number(qLevel);
		} else {
			if (stageLevel) {
				level = Number(stageLevel);
			}
		}
		console.log("ql", questions.length);
		console.log("gamecomplete", gameComplete);
		console.log("resetgamecomplete", resetGame);
		if ((questions.length === 0 && !gameComplete) || resetGame) {
			setRemoveBanana(false);

			if (resetGame) {
				setResetGame(false);
				setGameComplete(false);
				setNextGameModal(false);
			}

			const items = randomFoodItemGetter(8, level);
			console.log("items", items);
			setQuestions(items);
			setBananaCount(items.length);

			setTimeout(() => {
				setOpenModal(true);
			}, 5000);
		}
	}, [questions, gameComplete, resetGame]);

	useEffect(() => {
		const gends = ["girl", "boy"];

		if (qGender && gends.includes(qGender.toLowerCase())) {
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

			if (bananaCount - 1 > 0) {
				setTimeout(() => {
					setOpenModal(true);
				}, 2500);
			}

			if (!gameComplete && bananaCount > 0) {
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
		// setRemoveBanana(true);

		const filtered = await reShuffle(questions);

		setQuestions(filtered);

		// setTimeout(() => {
		// 	unRmvBanana();
		// 	if (bananaCount - 1 !== 0)
		// 		setBananaCount((prevCount) => {
		// 			const newCount = prevCount - 1;
		// 			return newCount;
		// 		});
		// }, 500);

		// if (bananaCount - 1 === 0) {
		// 	setGameComplete(true);
		// 	setOpenThankyou(true);
		// } else {
		setTimeout(() => {
			setDisabledChoices([]);
			setOpenModal(true);
		}, 1000);
		// }
	};

	const handleButtonClick = async (ch) => {
		const rightAns = questions[0];

		const right = await vowelChecker(ch, rightAns);

		if (right) {
			setTry(0);
			setRemoveBanana(true);
			setCorrectButton(ch);

			const filtered = await Qfilters(rightAns, questions);

			setQuestions(filtered);

			setTimeout(() => {
				setDisabledChoices([]);
			}, 1000);

			if (bananaCount - 1 === 0) {
				playRightSound();

				setGameComplete(true);
				setOpenCheckModal(true);

				setTimeout(() => {
					setOpenThankyou(true);
				}, 2000);
			} else {
				setTimeout(() => {
					playRightSound();
					setOpenCheckModal(true);
				}, 500);
			}

			let rs = numRight;
			setNumRight(rs++);
		} else {
			setDisabledChoices([...disabledChoices, ch]);
			playWrongSound();

			let i = tries + 1;

			setTry(i);
			if (i >= 3) {
				maxClick();
			}
		}
	};

	// Function to get the character based on the stage level
	const getCharacter = () => {
		return stgLevel === "2" ? HoneyBun : Gonzo;
	};

	// Function to get the food logo (Banana or Eggs) based on the stage level
	const getFoodLogo = (index) => {
		let level = 1;
		if (qLevel) {
			level = Number(qLevel);
		} else if (stageLevel) {
			level = Number(stageLevel);
		}

		if (level === 2) {
			return eggs[index]; // Show eggs for level 2
		}

		return Banana; // Show bananas for level 1
	};

	const handleBackClick = () => {
		navigate(-1);
	};

	const closeTyVideo = () => {
		setOpenThankyou(false);
		setNextGameModal(true);
	};

	return (
		<div className="stage2-main main" style={{ display: "block" }}>
			<audio ref={audioRef2} src={ErrorSound} />
			<audio ref={audioRef3} src={rightSound} />
			<audio autoPlay loop src={"/BgMusic.mp3"} />
			{/* backgroun animation */}
			<video
				autoPlay
				muted
				loop
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: "1",
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
								width: "90%",
								display: "flex",
								alignItems: "end",
								justifyContent: "right",
							}}
						>
							<div className="stage-2-character-div">
								<img
									className="stage-2-char-div"
									src={gender === "boy" ? iconBoy : iconGirl}
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
													alt="Food"
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
												alt="Food"
											/>
										)}
									</React.Fragment>
								))}
							</div>
						</div>

						{/* Display HoneyBun or Gonzo based on stage */}
						<div
							className="stage-2-character-div"
							style={{ justifyContent: "left", marginRight: "10%" }}
						>
							<img
								className="stage2-char-div"
								src={getCharacter()}
								alt="Character"
							/>
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
			{gameComplete ? (
				<div className="gmCompleteDiv">
					{openThankyou && (
						<div className="modal">
							<BS1GonzoTY closeTyVideo={closeTyVideo} gameLevel={stgLevel} />
						</div>
					)}
					{openNextGameModal && (
						<NextGameModal
							gender={gender}
							route={nextRoute}
							resetGame={() => setResetGame(true)}
						/>
					)}
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
