import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Boy.css";
import { useLocation, useNavigate } from "react-router-dom";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // Importing back button image

import { randonItemGetter } from "../utils/imageAssetPicker";
import { Qfilters, shuffle } from "../utils/formatter";

import Boy from "../assets/bs3/BOY.gif";
import Girl from "../assets/bs3/GIRL.gif";
import NextGameModal from "./Modals/NextGameModal";
import S3TY from "./S3TY";

import { restrictToParentElement } from "@dnd-kit/modifiers";

export default function Stage3() {
	const [rightItems, setItems] = useState([]);
	const [wrongItems, setWrongItems] = useState([]);
	const [resetGame, setResetGame] = useState(false);

	const [nextRoute, setNextRoute] = useState("");

	const [gender, setGender] = useState("boy");
	const [level, setLevel] = useState(1);

	const [openThankyou, setOpenThankyou] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [dropItems, setDropItems] = useState(["right", "item", "wrong"]);
	const [rightAnsPosition, setRightAnsPosition] = "right";
	const [correct, setCorrect] = useState(false);
	const [wrong, setWrong] = useState(false);
	const [openNextGameModal, setNextGameModal] = useState(false);
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	const navigate = useNavigate();
	useEffect(() => {
		const lvl = qLevel;
		console.log("correct Triggered");
		if (correct) {
			if (rightItems?.length === 1) {
				setGameComplete(true);
			} else {
				setWrong(false);
				const filterRight = Qfilters(rightItems[0], rightItems);
				setItems(filterRight);
				const wrongItem = wrongItems;
				const filterWrong = Qfilters(wrongItem[0], wrongItem);
				setWrongItems(filterWrong);

				let pos = "center";
				const drpItems = dropItems;
				const indx = drpItems.findIndex((itm) => itm === "right");
				console.log("lvl");
				console.log(lvl);
				if (lvl === "2") {
					switch (indx) {
						case 0:
							pos = "left";
							break;
						case 3:
							pos = "right";
							break;
						case 2:
							pos = "center2";
							break;
						default:
							pos = "center";
							break;
					}

					shuffleItems2(pos);
				} else {
					switch (indx) {
						case 0:
							pos = "left";
							break;
						case 2:
							pos = "right";
							break;
						default:
							pos = "center";
							break;
					}

					shuffleItems(pos);
				}
			}
			setTimeout(() => {
				setCorrect(false);
			}, 2000);
		}
	}, [correct]);

	const shuffleItems = (position) => {
		const drps = ["right", "wrong"];
		const shuffled = shuffle(drps);
		switch (position) {
			case "right":
				setDropItems([shuffled[0], shuffled[1], "item"]);
				break;
			case "center":
				setDropItems([shuffled[0], "item", shuffled[1]]);
				break;
			case "left":
				setDropItems(["item", shuffled[0], shuffled[1]]);
				break;
		}
	};

	const shuffleItems2 = (position) => {
		const drps = ["right", "wrong", "wrong2"];
		const shuffled = shuffle(drps);
		switch (position) {
			case "right":
				setDropItems([shuffled[0], shuffled[1], shuffled[2], "item"]);
				break;
			case "center":
				setDropItems([shuffled[0], "item", shuffled[1], shuffled[2]]);
				break;
			case "center2":
				setDropItems([shuffled[0], shuffled[1], "item", shuffled[2]]);
				break;
			case "left":
				setDropItems(["item", shuffled[0], shuffled[1], shuffled[2]]);
				break;
		}
	};

	useEffect(() => {
		if (qGender) {
			setGender(qGender.toLowerCase());
		}
		if (qLevel) {
			setLevel(qLevel);
		}
	}, [qGender]);

	// useEffect routing for next page
	useEffect(() => {
		let gd = "boy";
		if (qGender) {
			gd = qGender.toLowerCase();
		}

		let lvl = "1";

		let nxtRt = `/BegLevelPickerBoy`;

		if (qLevel && qLevel === "2") {
			if (gd == "girl") {
				nxtRt = `/RewardPageGirl`;
			} else {
				nxtRt = `/RewardPageBoy`;
			}
		} else {
			if (gd == "girl") {
				nxtRt = `/RewardPageGirl`;
			} else {
				nxtRt = `/RewardPageBoy`;
			}
		}

		setNextRoute(nxtRt);
	}, [qGender, qLevel]);

	useEffect(() => {
		let iLevel = 1;
		if (qLevel) {
			iLevel = Number(qLevel);
		}
		if (
			(rightItems?.length === 0 && wrongItems?.length === 0 && !gameComplete) ||
			resetGame
		) {
			console.log("ilevel");
			console.log(iLevel);
			if (iLevel === 2) {
				console.log("shuff2");
				shuffleItems2("center");
			} else {
				shuffleItems("center");
			}

			const items = randonItemGetter(8, iLevel);
			const wrnItems = randonItemGetter(16, iLevel, items);
			// setQuestion(items[0]);
			console.log("sdd");
			console.log(items);
			console.log(wrnItems);
			setItems(items);
			setWrongItems(wrnItems);
		}

		if (gameComplete) {
			// setTimeout(() => {

			setOpenThankyou(true);
			// }, 500);
		}

		if (resetGame) {
			setGameComplete(false);
			setNextGameModal(false);
			setResetGame(false);
		}
	}, [rightItems, wrongItems, qLevel, gameComplete, resetGame]);

	const closeTyVideo = () => {
		setOpenThankyou(false);
		setNextGameModal(true);
	};

	function handleDragEnd(event) {
		const { over } = event;

		if (over) {
			if (over.id === "right") {
				console.log("Dropped in Zone 1: Item accepted");

				setCorrect(true);
			} else if (over.id === "wrong") {
				console.log("Dropped in Zone 2: Item rejected");

				setWrong(true);
			}
		} else {
			console.log("Dropped outside of any zone");
		}
	}

	function DraggableItem(item) {
		const { attributes, listeners, setNodeRef, transform } = useDraggable({
			id: "draggable",
		});

		const style = {
			transform: transform
				? `translate3d(${transform.x}px, ${transform.y}px, 0)`
				: "",
			width: "200px",
			height: "400px",
			// backgroundColor: "lightblue",
		};

		return (
			<div ref={setNodeRef} style={style} {...listeners} {...attributes}>
				<img
					style={{
						objectFit: "contain",
						width: "100%",
						height: "auto",
						display: "block", // Ensures the image is treated as a block element
						margin: "0 auto", // Centers the image horizontally
					}}
					src={gender === "boy" ? Boy : Girl}
				/>
			</div>
		);
	}

	function DroppableZone({ id, label }) {
		const { setNodeRef } = useDroppable({
			id: id,
		});

		const style = {
			width: 200,
			height: 200,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			border: "2px dashed black",
		};

		return (
			<div ref={setNodeRef} className="stage3-option-div">
				<div className="stage3-option-label-div">{label}</div>
			</div>
		);
	}

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};

	return (
		<div className="stage3-main main">
			{/* Fullscreen background video */}
			<video
				autoPlay
				muted
				loop
				style={{
					position: "fixed", // Ensures it stays in the background
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					objectFit: "cover", // Stretches the video to cover the whole screen
					zIndex: "1", // Places the video behind the game content
				}}
			>
				<source src="/bgstage4.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Game content */}
			<div
				style={{
					position: "relative",
					zIndex: "1", // Ensures the game is above the video
					width: "100%",
					height: "100%",
					justifyContent: "center",
				}}
			>
				<button className="backButton" onClick={handleBackClick}>
					<img src={backButtonImage} alt="Back" />
				</button>

				<div className="stage3-top-div">
					<div className="stage3-top-div-level2">
						{rightItems?.length ? (
							<img
								style={{ objectFit: "contain", width: "90%", height: "90%" }}
								src={rightItems[0]?.image}
							/>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className="draggable-containers">
					<DndContext
						onDragEnd={handleDragEnd}
						modifiers={[restrictToParentElement]}
					>
						<div className="draggable-container2">
							{dropItems?.map((drp) => {
								if (drp === "right") {
									return (
										<DroppableZone
											id="right"
											label={rightItems[0]?.id || ""}
											isActive={true}
										/>
									);
								}
								if (drp === "wrong") {
									return (
										<DroppableZone
											id="wrong"
											label={wrongItems[0]?.id || ""}
											isActive={false}
										/>
									);
								}
								if (drp === "wrong2") {
									return (
										<DroppableZone
											id="wrong"
											label={wrongItems[1]?.id || ""}
											isActive={false}
										/>
									);
								}
								if (drp === "item") {
									return <DraggableItem />;
								}
							})}
						</div>
					</DndContext>
				</div>
			</div>
			{gameComplete && openThankyou && (
				<div className="modal">
					<S3TY closeTyVideo={closeTyVideo} />
				</div>
			)}
			{openNextGameModal ? (
				<NextGameModal
					gender={gender}
					route={nextRoute}
					resetGame={() => {
						console.log("reset");
						setResetGame(true);
					}}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
