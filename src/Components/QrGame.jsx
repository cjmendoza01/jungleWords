import React, { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { qrQsGetter, randonFoodGetter } from "../utils/imageAssetPicker";

import startButtonImage from "../assets/buttons&dialogues/start.png";
import CheckModal from "./Modals/CheckModal";
import { Qfilters } from "../utils/formatter";
import { qrGameQsGetter } from "../utils/advAssets";

export default function QRGame() {
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

	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

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
		<div className="qrGameDiv">
			{/* <div
				style={{
					// display: "flex",
					width: "100%",
					height: "10%",
					justifyContent: "center",
					alignItems: "center",
				}}
			> */}

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
									backgroundColor: "black",
									width: "80%",
									height: "100%",
									justifyContent: "center",
								}}
							>
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
					height: "50%",
					display: "flex",
					justifyContent: "center",
				}}
			>
				{questions?.length ? (
					<div style={{ width: "30%" }}>
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
			{/* ) : (
					<></>
				)} */}
			{/* </div> */}

			{showCorrectModal ? <CheckModal /> : <></>}
		</div>
	);
}
