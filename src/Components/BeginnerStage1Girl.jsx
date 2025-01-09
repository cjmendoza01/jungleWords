import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Girl.css";
import stage1Done from "../assets/buttons&dialogues/stage1Done.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import
import { useNavigate } from "react-router-dom";
import ErrorSound from "/Wrong.mp3";
import rightSound from "/Corect.mp3";
// Import all image of sound icon
import soundicon from "../assets/Volume.png";
import { foodItemsList } from "../utils/dndItemsGame";
import axios from "axios";
const BeginnerStage1Boy = () => {
	const navigate = useNavigate();
	// Food items to display in the side and to be dragged

	const [foodItems, setFoodItems] = useState([]);
	const [rightCounter, setRightCounter] = useState(0);

	useEffect(() => {
		const apiItems = getDatas();
	}, []);
	function getRandomElements(arr, numElements) {
		const shuffled = arr.slice(); // Create a copy to avoid modifying the original array
		const selected = [];
		for (let i = 0; i < numElements; i++) {
			const randomIndex = Math.floor(Math.random() * (shuffled.length - i)); // Adjust for shrinking array
			selected.push(shuffled.splice(randomIndex, 1)[0]);
		}
		return selected;
	}

	const getDatas = async () => {
		try {
			const data = await axios.get(
				"https://junglewordsapi.onrender.com/api/data/beginner/stage1"
			);

			const apiItems = data?.data?.data || [];
			if (!apiItems || apiItems?.length === 0) {
				const x = getRandomElements(foodItemsList, 6); // Adjust to select 6 items
				setFoodItems(x);
			} else {
				setFoodItems(apiItems);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const [currentFoodItem, setCurrentFoodItem] = useState(null);
	const [isFoodItemDropped, setIsFoodItemDropped] = useState(false);
	const [modalData, setModalData] = useState({
		item: "",
		modalChoices: [],
		image: null,
		isDisplayed: false,
		audio: null,
	});
	const [modalActive, setModalActive] = useState(false);
	const [isModalAnswerCorrect, setIsModalAnswerCorrect] = useState(false);
	const [scale, setScale] = useState(1);
	const [tries, setTry] = useState(0);
	const [wrongItem, setWrongItem] = useState(false);
	const [itemDone, setItemDone] = useState(0);
	const audioRef = useRef();
	const audioRef2 = useRef();
	const audioRef3 = useRef();

	const handleDragEnd = (event) => {
		if (event.over && event.over.id === "droppable-zone" && !currentFoodItem) {
			const active = event.active;
			const item = foodItems.find((f) => "food-" + f.id === active.id);
			setIsFoodItemDropped(true);
			setCurrentFoodItem(item.image);
			setFoodItems((foodItems) =>
				foodItems.map((f) =>
					"food-" + f.id === active.id ? { ...f, isDisplayed: false } : f
				)
			);

			// setModalData({
			// 	id: item.id,
			// 	modalChoices: item.modalChoices,
			// 	audio: item.audio,
			// 	isDisplayed: item.isDisplayed,
			// 	image: item.image,
			// });
			// setTimeout(() => {
			setModalActive(true);
			setTimeout(() => {
				audioRef.current.play();
			}, 250);
			// }, 100);
			setIsModalAnswerCorrect(false);
		}
	};

	useEffect(() => {
		console.log("modalActive", modalActive);
		console.log("wrongItem", wrongItem);
		const ft = [...foodItems] || [];
		let right = rightCounter;

		if (modalActive && wrongItem) {
			console.log("mddddd");
			const md = modalData;

			setFoodItems((foodItems) =>
				foodItems.map((f) => (f.id === md.id ? { ...f, isDisplayed: true } : f))
			);
			// setTimeout(() => {
			// 	setModalData({
			// 		item: "",
			// 		modalChoices: [],
			// 		audio: null,
			// 		image: null,
			// 		isDisplayed: false,
			// 	});
			// }, 150);
			setTry(0);
		}
		if ((isModalAnswerCorrect && !modalActive) || wrongItem) {
			if (isModalAnswerCorrect) {
				playRightSound();
			}
			setTimeout(() => {
				setCurrentFoodItem("");
				setIsFoodItemDropped(false);
			}, 500);

			if (!wrongItem) {
				setTimeout(() => {
					setScale((scale) => scale + 0.05);
				}, 1000);
				right = right + 1;
				setRightCounter(right);
			}

			setWrongItem(false);

			let itD = itemDone + 1;

			setItemDone(itD);

			if (right === 6) {
				setTimeout(() => {
					navigate("/BS1TY?gender=girl&level=1");
				}, 1000);
			}
		}
	}, [isModalAnswerCorrect, modalActive, wrongItem]);

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};

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
	return (
		<main className="main">
			<audio autoPlay loop src={"/BgMusic.mp3"} />
			<audio ref={audioRef2} src={ErrorSound} />
			<audio ref={audioRef3} src={rightSound} />
			<video
				autoPlay
				muted={false}
				loop
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
			>
				<source src="/bgstage1.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			{/* Back button in the upper left corner */}
			<div className="back-button-container">
				<button onClick={handleBackClick} className="back-button">
					<img src={backButtonImage} alt="Back" />
				</button>
			</div>

			<div className="drag-n-drop-container">
				<DndContext onDragEnd={handleDragEnd}>
					{/* Container for the droppable zone */}
					<div className="droppable-container">
						<DroppableZone scale={scale}>
							{isFoodItemDropped && (
								<div className="">
									<img
										src={currentFoodItem}
										alt="dropped-item"
										style={{
											width: "60%",
											height: "60%",
											objectFit: "contain",
										}}
									/>
								</div>
							)}
						</DroppableZone>
					</div>

					{/* Container for the food items */}
					<div className="draggable-container">
						<div className="foods-container">
							{foodItems?.map(({ id, image, modalChoices, isDisplayed }, i) => {
								return isDisplayed ? (
									<FoodItem
										key={i}
										id={"food-" + id}
										modalChoices={modalChoices}
									>
										<img
											src={image}
											alt={id}
											onMouseDown={() => {
												setModalData(foodItems[[i]]);
												console.log(foodItems[i]);
											}}
										/>
									</FoodItem>
								) : (
									<div key={i}></div>
								);
							})}
						</div>
					</div>
				</DndContext>
			</div>

			{/* MODAL / POPUP */}
			{/* {modalActive && ( */}
			<div
				className="modal"
				style={modalActive ? {} : { visibility: "hidden" }}
			>
				<div className="modal-backdrop"></div>
				<div className="modal-container">
					<div className="soundicon" onClick={() => audioRef.current.play()}>
						<img src={soundicon} alt="soundicon" />
					</div>
					<audio ref={audioRef} src={modalData.audio} />

					<div className="choices">
						{modalData.modalChoices.map(({ image, isCorrect }, i) => {
							return (
								<ModalChoice
									key={i}
									image={image}
									isCorrect={isCorrect}
									setModalActive={setModalActive}
									setModalData={setModalData}
									isModalAnswerCorrect={isModalAnswerCorrect}
									setIsModalAnswerCorrect={setIsModalAnswerCorrect}
									tries={tries}
									setTry={setTry}
									setWrongItem={setWrongItem}
									playWrongSound={playWrongSound}
									wrongItem={wrongItem}
								/>
							);
						})}
					</div>
				</div>
			</div>
			{/* )} */}
		</main>
	);
};

export default BeginnerStage1Boy;

// Component for the food item
const FoodItem = ({ id, modalChoices, children }) => {
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({ id: id, data: { choices: modalChoices } });

	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
				cursor: isDragging ? "grabbing" : "grab",
		  }
		: undefined;

	return (
		<button
			ref={setNodeRef}
			className="food-item"
			style={style}
			{...listeners}
			{...attributes}
			id={id}
		>
			{children}
		</button>
	);
};

// Component for the droppable zone
const DroppableZone = (props) => {
	const { isOver, setNodeRef } = useDroppable({ id: "droppable-zone" });
	const style = {
		// backgroundColor: isOver ? "green" : undefined,
		transform: "scale(" + props.scale + ")",
	};

	return (
		<div style={style} className="droppable-zone-girl" ref={setNodeRef}>
			{props.children}
		</div>
	);
};

// Component for the modal/popup choices
const ModalChoice = ({
	image,
	isCorrect,
	setModalActive,
	setModalData,
	isModalAnswerCorrect,
	setIsModalAnswerCorrect,
	tries,
	setTry,
	setWrongItem,
	playWrongSound,
	wrongItem,
}) => {
	const [status, setStatus] = useState("");

	useEffect(() => {
		if (isModalAnswerCorrect || wrongItem) {
			setTimeout(() => {
				setStatus("");
			}, 700);
		}
	}, [isModalAnswerCorrect, wrongItem]);

	return (
		<div
			className={`choice ${status}`}
			onClick={(e) => {
				if (isModalAnswerCorrect) {
					e.preventDefault();
				} else {
					if (!isCorrect) {
						setStatus("wrong");
						const tr = tries + 1;
						console.log(tr);

						playWrongSound();
						if (tr === 2) {
							// setTimeout(() => {
							// 	statCH();
							// }, 500);
							setWrongItem(true);
							setTry(0);
							setTimeout(() => {
								setModalActive(false);

								setModalData({
									item: "",
									modalChoices: [],
									audio: null,
									image: null,
									isDisplayed: false,
								});
							}, 100);
						} else {
							setTry(tr);
						}
					} else {
						setTry(0);
						setStatus("right");
						setIsModalAnswerCorrect(true);
						// setTimeout(() => {
						// 	statCH();
						// }, 500);
						setTimeout(() => {
							setModalActive(false);

							setModalData({
								item: "",
								modalChoices: [],
								audio: null,
								image: null,
								isDisplayed: false,
							});
						}, 100);
					}
				}
			}}
		>
			{image ? <img src={image} alt="letter" loading="lazy" /> : null}
		</div>
	);
};
