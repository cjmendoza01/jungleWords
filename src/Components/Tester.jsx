import React, { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { randonFoodGetter } from "../utils/imageAssetPicker";

import startButtonImage from "../assets/buttons&dialogues/start.png";
import CheckModal from "./Modals/CheckModal";

export default function Tester() {
	const [gameStart, setGameStart] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [gameComplete, setGameComplete] = useState(false);
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
		if (!gameComplete && questions.length === 0 && gameStart) {
			const items = randonFoodGetter(5);
			setQuestions(items);
			console.log(items);
		}
	}, [questions, gameStart, gameComplete]);

	const handleScan = (result) => {
		console.log(result);
		if (result?.length) {
			const { rawValue } = result[0];
			const ans = rawValue || "";
			console.log("raw");
			console.log(rawValue);

			if (questions[0].id.toLowerCase() === ans.toLowerCase()) {
				console.log("right");
				setShowCorrectModal(true);
			}
		}
		setOpenCam(false);
	};

	return (
		<main className="main">
			<div
				style={{
					display: "flex",
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{!gameStart ? (
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
				{gameStart ? (
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
									<img
										src={questions[0].image}
										style={{
											objectFit: "contain",
										}}
									/>
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
				) : (
					<></>
				)}
			</div>
			{openCam ? (
				<div
					style={{
						display: "block",
						width: "100%",
						height: "100%",
						justifyContent: "center",
						position: "absolute",
					}}
				>
					<div style={{ position: "absolute", top: "10px" }}>
						<button onClick={() => setOpenCam(false)}>X</button>
					</div>
					<div style={{ textAlign: "center" }}>Scan Qr</div>
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
							<div
								style={{
									width: "550px",
									height: "550px",
								}}
							>
								<Scanner onScan={handleScan} />
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}

			{showCorrectModal ? <CheckModal /> : <></>}
		</main>
	);
}
