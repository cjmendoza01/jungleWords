import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Boy.css";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage from "../assets/bs3/bgbs3.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // Importing back button image

import { randonItemGetter } from "../utils/imageAssetPicker";
import { Qfilters, shuffle } from "../utils/formatter";

import Boy from "../assets/boy.png";
import Girl from "../assets/girl.png";
import NextGameModal from "./Modals/NextGameModal";

export default function Stage3() {
	const [rightItems, setItems] = useState([]);
	const [wrongItems, setWrongItems] = useState([]);
	const [resetGame, setResetGame] = useState(false);

	const [nextRoute, setNextRoute] = useState("");

	const [gender, setGender] = useState("boy");
	const [level, setLevel] = useState(1);

	const [gameComplete, setGameComplete] = useState(false);
	const [dropItems, setDropItems] = useState(["right", "item", "wrong"]);
	const [rightAnsPosition, setRightAnsPosition] = "right";
	const [correct, setCorrect] = useState(false);
	const [wrong, setWrong] = useState(false);
	const [openNextGameModal, setNextGameModal] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
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

				setTimeout(() => {
					setCorrect(false);
				}, 2000);
			}
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

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

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

		let nxtRt = `BegLevelPickerBoy`;

		if (qLevel && qLevel === "2") {
			if (gd == "girl") {
				nxtRt = `IntermediateLevelGirl`;
			} else {
				nxtRt = `IntermediateLevelBoy`;
			}
		} else {
			if (gd == "girl") {
				nxtRt = `BegLevelPickerGirl`;
			} else {
				nxtRt = `BegLevelPickerBoy`;
			}
		}

		setNextRoute(nxtRt);
	}, [qGender, qLevel]);

	useEffect(() => {
		let iLevel = qLevel || 1;
		if (
			(rightItems?.length === 0 && wrongItems?.length === 0 && !gameComplete) ||
			resetGame
		) {
			shuffleItems("center");
			const items = randonItemGetter(8, iLevel);
			const wrnItems = randonItemGetter(8, iLevel, items);
			// setQuestion(items[0]);
			console.log("sdd");
			console.log(items);
			console.log(wrnItems);
			setItems(items);
			setWrongItems(wrnItems);
		}

		if (gameComplete) {
			setTimeout(() => {
				setNextGameModal(true);
			}, 500);
		}

		if (resetGame) {
			setGameComplete(false);
			setResetGame(false);
		}
	}, [rightItems, wrongItems, qLevel, gameComplete, resetGame]);

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
			width: "100px",
			height: "200px",
			// backgroundColor: "lightblue",
		};

		return (
			<div ref={setNodeRef} style={style} {...listeners} {...attributes}>
				<img
					style={{ objectFit: "contain", width: "100%", height: "100%" }}
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
			<div
				style={{
					display: "block",
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
					<DndContext onDragEnd={handleDragEnd}>
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
								if (drp === "item") {
									return <DraggableItem />;
								}
							})}
						</div>
					</DndContext>
				</div>
			</div>
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
