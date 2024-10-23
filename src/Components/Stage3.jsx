import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Boy.css";
import { useLocation, useNavigate } from "react-router-dom";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // Importing back button image

import { randomVowelGetter, randonItemGetter } from "../utils/imageAssetPicker";
import { Qfilters, shuffle } from "../utils/formatter";

import Boy from "../assets/bs3/BOY.gif";
import Girl from "../assets/bs3/GIRL.gif";
import wrChoice from "../assets/wrongChoice.png";
import NextGameModal from "./Modals/NextGameModal";
import S3TY from "./S3TY";

import ErrorSound from "/Wrong.mp3";
import rightSound from "/Corect.mp3";

import { restrictToParentElement } from "@dnd-kit/modifiers";
import CheckModal from "./Modals/CheckModal";
import soundicon from "../assets/Volume.png";
import { getSimilarWords } from "../utils/is3Assets";

export default function Stage3() {
	const audioRef = useRef();
	const [rightItems, setItems] = useState([]);
	const [wrongItems, setWrongItems] = useState([]);
	const [resetGame, setResetGame] = useState(false);

	const [nextRoute, setNextRoute] = useState("");
	const [openCheckModal, setOpenCheckModal] = useState(false);
	const [gender, setGender] = useState("boy");
	const [level, setLevel] = useState(1);

	const [openThankyou, setOpenThankyou] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [dropItems, setDropItems] = useState(["right", "item", "wrong"]);
	const [rightAnsPosition, setRightAnsPosition] = "right";
	const [correct, setCorrect] = useState(false);
	const [wrong, setWrong] = useState(false);
	const [openNextGameModal, setNextGameModal] = useState(false);

	const [dropRefs, setDropRefs] = useState([]);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const location = useLocation();

	const rightRef = useRef(null);

	const itemRef = useRef(null);
	const wrongRef = useRef(null);
	const wrongRef2 = useRef(null);

	const queryParams = new URLSearchParams(location.search);

	const qGender = queryParams.get("gender");
	const qLevel = queryParams.get("level");

	const navigate = useNavigate();
	useEffect(() => {
		console.log("rightItems", rightItems);
	}, [rightItems]);

	const audioRef2 = useRef();
	const audioRef3 = useRef();

	const playWrongSound = () => {
		if (audioRef2.current) {
			audioRef2.current.play();
		}
		setTimeout(() => {
			setWrong(false);
		}, 1000);
	};

	const playRightSound = () => {
		if (audioRef3.current) {
			audioRef3.current.play();
		}
	};

	useEffect(() => {
		if (openCheckModal) {
			setTimeout(() => {
				setOpenCheckModal(false);
			}, 2000);
		}
	}, [openCheckModal]);

	useEffect(() => {
		const lvl = qLevel;
		console.log("correct Triggered");
		if (correct) {
			if (rightItems?.length === 1) {
				setOpenCheckModal(true);
				setCorrect(false);
				setTimeout(() => {
					setGameComplete(true);
				}, 2000);
			} else {
				setOpenCheckModal(true);

				setWrong(false);
				const filterRight = Qfilters(rightItems[0], rightItems);
				setItems(filterRight);
				const wrongItem = wrongItems;
				if (lvl === "2") {
					const simlarWords = getSimilarWords(filterRight[0].id);
					console.log("simlarWords", simlarWords);
					setWrongItems(simlarWords);
				} else {
					const filterWrong = Qfilters(wrongItem[0], wrongItem);
					setWrongItems(filterWrong);
				}
				setTimeout(() => {
					audioRef.current.play();
				}, 2200);
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
				setCorrect(false);
			}
			// setTimeout(() => {
			// 	setCorrect(false);
			// }, 2000);
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

			let items = randonItemGetter(8, iLevel);

			if (iLevel === 2) {
				items = randomVowelGetter(8, iLevel);
				const simlarWords = getSimilarWords(items[0].id);
				console.log("simlarWords", simlarWords);
				setWrongItems(simlarWords);
			} else {
				const wrnItems = randonItemGetter(16, iLevel, items);
				setWrongItems(wrnItems);
			}

			setItems(items);
			setTimeout(() => {
				audioRef.current.play();
			}, 1000);
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

	const checkForCollision = (dropzoneRefs) => {
		console.log("drop zonesss", dropzoneRefs);
		if (dropzoneRefs?.length) {
			for (const dropzone of dropzoneRefs) {
				const rect = dropzone.current.getBoundingClientRect();
				const itemRect = itemRef.current.getBoundingClientRect();

				console.log("itemrect", itemRect?.x);
				console.log("rectx", rect?.x);
				console.log("rectL", rect?.left);
				console.log("rectR", rect?.right);
				const cent = (itemRect?.left + itemRect?.right) / 2;
				if (cent >= rect.left && cent <= rect.right) {
					return dropzone;
				}
			}
			return null;
		}
	};

	useEffect(() => {
		const handleKeyPress = (event) => {
			const step = 20; // Movement step size
			let newPos = { ...position };

			switch (event.key.toLowerCase()) {
				case "a": // Move left
					newPos.x = newPos.x - step;
					break;
				case "d": // Move right
					newPos.x = newPos.x + step;
					break;
				default:
					return;
			}

			setPosition(newPos);
		};

		function handleKeyRelease() {
			console.log("release");
			const dropableRefs = [rightRef, wrongRef];
			const lvl = qLevel;

			if (lvl === "2") dropableRefs.push(wrongRef2);
			const collision = checkForCollision(dropableRefs);

			if (collision) {
				if (collision.current.id === "right") {
					console.log("Dropped in the right zone!");

					playRightSound();
					setCorrect(true);
					setPosition({ x: 0, y: 0 });
				} else {
					console.log("Dropped in the wrong zone!");
					playWrongSound();
					setWrong(true);
				}
			}
		}

		window.addEventListener("keydown", handleKeyPress);
		window.addEventListener("keyup", handleKeyRelease);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
			window.removeEventListener("keyup", handleKeyRelease);
		};
	}, [position, dropRefs]);

	// useEffect(() => {
	// 	const refs = ["right", "wrong", "wrong2"].map(() => React.createRef());
	// 	setDropRefs(refs);
	// }, []);

	const closeTyVideo = () => {
		setOpenThankyou(false);
		setNextGameModal(true);
	};

	function handleDragEnd(event) {
		const { over } = event;

		if (over) {
			if (over.id === "right") {
				console.log("Dropped in Zone 1: Item accepted");

				playRightSound();
				setCorrect(true);
			} else if (over.id === "wrong" || over.id === "wrong2") {
				console.log("Dropped in Zone 2: Item rejected");
				playWrongSound();
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
				: `translate(${position.x}px, ${position.y}px)`,
			width: "200px",
			height: "400px",
			position: "relative",
			// backgroundColor: "lightblue",
		};

		return (
			<div ref={setNodeRef} style={style} {...listeners} {...attributes}>
				{wrong && (
					<img
						src={wrChoice}
						style={{
							objectFit: "contain",
							width: "100%",
							position: "absolute",
							top: "-35%",
						}}
						alt="wrong"
					/>
				)}
				<img
					ref={itemRef}
					style={{
						objectFit: "contain",
						width: "100%",
						height: "auto",
						display: "block", // Ensures the image is treated as a block element
						margin: "0 auto", // Centers the image horizontally
					}}
					src={gender === "boy" ? Boy : Girl}
					alt="Character"
				/>
			</div>
		);
	}

	function DroppableZone({ id, label, index, refData }) {
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
			<div ref={setNodeRef} id={id} className="stage3-option-div">
				<div ref={refData} id={id} className="stage3-option-label-div">
					{label}
				</div>
			</div>
		);
	}

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};
	const videoRef = useRef();
	useEffect(() => {
		if (videoRef?.current) {
			videoRef.current.load();
			videoRef.current.play();
		}
	}, []);

	return (
		<div className="stage3-main main">
			{/* Fullscreen background video */}
			<audio ref={audioRef2} src={ErrorSound} />
			<audio ref={audioRef3} src={rightSound} />
			<audio autoPlay loop src={"/BgMusic.mp3"} />
			<video
				ref={videoRef}
				loop
				src={"/bgstage4.mp4"}
				autoPlay
				muted={false}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					objectFit: "cover",
					zIndex: "1",
				}}
			/>
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
							<>
								<div
									className="soundicon"
									style={{
										position: "absolute",
										top: "15px",
										left: "15px",
										width: "50px",
										height: "50px",
										backgroundColor: "lightgray",
										cursor: "pointer",
										border: "none",
									}}
									onClick={() => audioRef.current.play()}
								>
									<img src={soundicon} alt="soundicon" />
								</div>
								<img
									alt="Object Item"
									style={{ objectFit: "contain", width: "90%", height: "90%" }}
									src={rightItems[0]?.image}
									onClick={() => {
										if (rightItems[0]?.audio) {
											audioRef.current.play();
										}
									}}
								/>
							</>
						) : (
							<></>
						)}
						{rightItems[0]?.audio && (
							<audio ref={audioRef} src={rightItems[0]?.audio} />
						)}
					</div>
				</div>

				<div className="draggable-containers">
					<DndContext
						onDragEnd={handleDragEnd}
						modifiers={[restrictToParentElement]}
					>
						<div className="draggable-container2">
							{dropItems?.map((drp, index) => {
								if (drp === "right") {
									return (
										<DroppableZone
											id="right"
											label={rightItems[0]?.id || ""}
											isActive={true}
											index={index}
											refData={rightRef}
										/>
									);
								}
								if (drp === "wrong") {
									return (
										<DroppableZone
											id="wrong"
											label={wrongItems[0]?.id || ""}
											isActive={false}
											index={index}
											refData={wrongRef}
										/>
									);
								}
								if (drp === "wrong2") {
									return (
										<DroppableZone
											id="wrong2"
											label={wrongItems[1]?.id || ""}
											isActive={false}
											index={index}
											refData={wrongRef2}
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
			{openCheckModal && <CheckModal />}
			{gameComplete ? (
				<div className="gmCompleteDiv">
					{openThankyou && (
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
			) : (
				<></>
			)}
		</div>
	);
}
