import React, { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { qrQsGetter, randonFoodGetter } from "../utils/imageAssetPicker";

import startButtonImage from "../assets/buttons&dialogues/start.png";
import CheckModal from "./Modals/CheckModal";
import { Qfilters } from "../utils/formatter";

export default function Tester() {
	const [gameStart, setGameStart] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [stringArr, setStringArr] = useState([]);
	const [gameComplete, setGameComplete] = useState(false);
	const [camStatus, setCamStatus] = useState("");
	const [scannerOn, setScannerOn] = useState(false);
	const [answerWrong, setAnswerWrong] = useState(false);
	const [showCorrectModal, setShowCorrectModal] = useState(false);
	const [openCam, setOpenCam] = useState(false);
	const [userAns, setUserAns] = useState("");

	useEffect(() => {
		if (showCorrectModal) {
			console.log("coorr");
			setTimeout(() => {
				setShowCorrectModal(false);
			}, 5000);
		}
	}, [showCorrectModal]);

	useEffect(() => {
		if (!openCam && questions?.length) {
			setOpenCam(true);
		}
	}, [openCam, questions]);

	useEffect(() => {
		if (
			!gameComplete &&
			questions.length === 0
			// && gameStart
		) {
			const items = qrQsGetter(5);
			setQuestions(items);
			const firstQ = items[0];
			const splitString = firstQ.sentence.split(firstQ.id);
			setStringArr(splitString);
			console.log(items);
			console.log(splitString);
		}

		if (gameComplete) {
			//route to next Game
		}
	}, [questions, gameComplete]);

	const handleScan = (result) => {
		console.log(result);
		if (result?.length) {
			const { rawValue } = result[0];
			const ans = rawValue || "";
			console.log("raw");
			console.log(rawValue);
			const currQuestion = questions[0];

			console.log("Qs", currQuestion);
			if (currQuestion?.id.toLowerCase() === ans.toLowerCase()) {
				console.log("right");
				setShowCorrectModal(true);
				setCamStatus("correct");
				if (questions?.length > 1) {
					setGameComplete(true);
				} else {
					const filterRight = Qfilters(questions[0], questions);
					setQuestions(filterRight);
				}
			} else {
				setCamStatus("error");
			}
			setOpenCam(false);
		}
	};

	useEffect(() => {
		if (camStatus !== "") {
			setTimeout(() => {
				setCamStatus("");
			}, 1000);
		}
	}, [camStatus]);

	return (
		<main className="main">
			<div
				style={{
					backgroundImage: url('../assets/bgbs1.png'), 
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "100%",
					height: "100vh",
				}}
			>
				{/* {!gameStart ? (
					<button onClick={() => setGameStart(true)} className="startButton">
						<img
							src={startButtonImage}
							alt="Start"
							className="startButtonImage"
						/>
					</button>
				) : (
					<></>
				)}
				{gameStart ? ( */}
				<div style={{ display: "block", width: "60%", height: "60%" }}>
					{questions?.length ? (
						<div
							style={{
								display: "block",
								width: "100%",
								height: "90%",
								// backgroundColor: "pink",
							}}
						>
							<div style={{ width: "100%", height: "50%" }}>
								<p>
									{stringArr[0]}
									<img
										src={questions[0].image}
										// alt={entry.item}
										style={{ width: "100px" }}
									/>
									{stringArr[1]}
								</p>
								{/* <img
										src={questions[0].image}
										style={{
											objectFit: "contain",
										}}
									/> */}
							</div>
							<div>
								<button onClick={() => setOpenCam(true)}>Scan Qr</button>
							</div>
							{/* <div
									style={
										answerWrong
											? { marginTop: "10px", color: "red" }
											: { marginTop: "10px" }
									}
								>
									Answer: {userAns}
								</div> */}
						</div>
					) : (
						<></>
					)}
				</div>
				{/* ) : (
					<></>
				)} */}
			</div>
			{/* {openCam ? ( */}
			<div
				style={{
				  position: "absolute",  
				  top: "20%",
				  right: "15%", 
				  width: "300px",
				  height: "300px",
				  display: "flex",
				  justifyContent: "center",
				  alignItems: "center",
				}}
			  >
				{/* <div
					// style={{ position: "absolute", top: "10px" }}
					>
						<button onClick={() => setOpenCam(false)}>X</button>
					</div>
					<div style={{ textAlign: "center" }}>Scan Qr</div> */}
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
					<div style={{ display: "block" }}>
						{camStatus !== "" ? (
							<div
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									backgroundColor: `${
										camStatus === "correct" ? "green" : "red"
									}`,
									opacity: "50%",
									zIndex: 1,
								}}
							></div>
						) : (
							<></>
						)}

						{camStatus === "correct" ? (
							<div
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									backgroundColor: "red",
									opacity: "50%",
									zIndex: 1,
								}}
							></div>
						) : (
							<></>
						)}

						<div
							style={
								{
									// width: "550px",
									// height: "550px",
								}
							}
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
			{/* ) : (
				<></>
			)} */}

			{showCorrectModal ? <CheckModal /> : <></>}
		</main>
	);
}
