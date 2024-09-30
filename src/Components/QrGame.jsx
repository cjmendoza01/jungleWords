import React, { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

import startButtonImage from "../assets/buttons&dialogues/start.png";
import CheckModal from "./Modals/CheckModal";
import { Qfilters } from "../utils/formatter";
import { qrGameQsGetter } from "../utils/advAssets";
import BGVid from "../assets/bgs1.mp4";
import Boy from "../assets/boy.png";
import Girl from "../assets/girl.png";
import NextGameModal from "./Modals/NextGameModal";
import BS1GonzoTY from "./BS1GonzoTY";

export default function QRGame() {
	const [questions, setQuestions] = useState([]);
	const [qIndex, setQIndex] = useState(0);
	const [gameComplete, setGameComplete] = useState(false);
	const [camStatus, setCamStatus] = useState("");

	const [showCorrectModal, setShowCorrectModal] = useState(false);
	const [openCam, setOpenCam] = useState(false);

	const [openNextGameModal, setNextGameModal] = useState(false);
	const [openThankyou, setOpenThankyou] = useState(false);
	const [resetGame, setResetGame] = useState(false);

	const [nextRoute, setNextRoute] = useState("");
	const [gender, setGender] = useState("boy");
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	useEffect(() => {
		let gend = "boy";
		if (qGender) {
			gend = qGender.toLowerCase();
		}

		let nxtRt = ``;

		if (qLevel === "2") {
			nxtRt == `/qrGame?gender=${gend}&level=2`;
		}

		setNextRoute(nxtRt);
		setGender(gend);
	}, [qGender]);

	useEffect(() => {
		if (showCorrectModal) {
			setTimeout(() => {
				setShowCorrectModal(false);
			}, 2000);
		}
	}, [showCorrectModal]);

	useEffect(() => {
		if (!openCam && questions?.length) {
			setOpenCam(true);
		}
	}, [openCam, questions]);

	useEffect(() => {
		if ((!gameComplete && questions.length === 0) || resetGame) {
			if (resetGame) {
				setResetGame(false);
				setGameComplete(false);
				setNextGameModal(false);
			}

			let level = 1;
			if (qLevel) {
				level = Number(qLevel);
			}
			const items = qrGameQsGetter(5, level);
			setQuestions(items);
			// const firstQ = items[0];
			// const splitString = firstQ.sentence.split(firstQ.id);
			// setStringArr(splitString);
			// console.log(items);
			// console.log(splitString);
		}

		if (gameComplete) {
			//route to next Game
		}
	}, [questions, gameComplete, setResetGame]);

	const level2Checker = (ans) => {
		const currQuestion = questions[0];

		console.log("Qs", currQuestion);

		if (currQuestion.ans[qIndex].toLowerCase() === ans.toLowerCase()) {
			console.log("right");
			setShowCorrectModal(true);
			setCamStatus("correct");
			if (qIndex === 1) {
				if (questions?.length === 1) {
					setGameComplete(true);
					setTimeout(() => {
						setOpenThankyou(true);
					}, 2000);
				} else {
					console.log("filter");
					console.log(questions[0]);
					const filterRight = Qfilters(questions[0], questions);
					setQuestions(filterRight);
				}
				setQIndex(0);
			} else {
				setQIndex(1);
			}
		} else {
			setCamStatus("error");
		}
	};

	const level1Checker = (ans) => {
		const currQuestion = questions[0];

		console.log("Qs", currQuestion);
		if (currQuestion?.id.toLowerCase() === ans.toLowerCase()) {
			console.log("right");
			setShowCorrectModal(true);
			setCamStatus("correct");
			if (questions?.length === 1) {
				setGameComplete(true);
				setTimeout(() => {
					setOpenThankyou(true);
				}, 2000);
			} else {
				console.log("filter");
				console.log(questions[0]);
				const filterRight = Qfilters(questions[0], questions);
				setQuestions(filterRight);
			}
		} else {
			setCamStatus("error");
		}
	};

	const handleScan = async (result) => {
		console.log(result);
		if (result?.length) {
			const { rawValue } = result[0];
			const ans = rawValue || "";
			console.log("raw");
			console.log(rawValue);

			if (qLevel === "2") {
				level2Checker(ans);
			} else {
				level1Checker(ans);
			}

			setOpenCam(false);
		}
	};

	const closeTyVideo = () => {
		setOpenThankyou(false);
		setNextGameModal(true);
	};

	useEffect(() => {
		if (camStatus !== "") {
			setTimeout(() => {
				setCamStatus("");
			}, 1000);
		}
	}, [camStatus]);

	useEffect(() => {
		if (questions) {
			console.log("qssss");
			console.log(questions);
		}
	}, [questions]);

	return (
		<div className="qrGameDiv">
			<div
				style={{
					height: "100%",
					width: "40%",
				}}
			>
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
						zIndex: "-1",
					}}
				>
					<source src={BGVid} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "right",
						width: "100%",
						height: "100%",
					}}
				>
					<div style={{ width: "40%", height: "60%" }}>
						<img className="qr-Character" src={gender === "boy" ? Boy : Girl} />
					</div>
				</div>
			</div>
			<div style={{ height: "100%", width: "60%" }}>
				<div className="qrGame-div1">
					<div className="qrGame-div-border">
						<div className="qrGame-camDiv">
							<div
								style={{
									width: "100%",
									height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									// backgroundColor: "blue",
								}}
							>
								<div
									style={{
										display: "flex",
										backgroundColor: `${
											camStatus
												? `${camStatus === "correct" ? "green" : "red"}`
												: "black"
										}`,
										width: "80%",
										height: "100%",
										justifyContent: "center",
									}}
								>
									<div
										style={{
											// width: "250px",
											height: "100%",
											aspectRatio: "1/1",
										}}
									>
										{!gameComplete && openCam ? (
											<Scanner onScan={handleScan} />
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "block",
						width: "100%",
						height: "40%",
						display: "flex",
						justifyContent: "center",
						alignItems: "start",
					}}
				>
					{questions?.length ? (
						<div style={{ width: "40%" }}>
							<img
								src={questions[0].image}
								style={{
									objectFit: "contain",
									width: "100%",
									height: "100%",
								}}
							/>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
			{showCorrectModal ? <CheckModal /> : <></>}
			{gameComplete && openThankyou && (
				<div className="modal">
					<BS1GonzoTY closeTyVideo={closeTyVideo} />
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
	);
}
