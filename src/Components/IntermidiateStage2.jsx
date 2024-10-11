import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Girl.css";
import stage1Done from "../assets/buttons&dialogues/stage1Done.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import
import { useLocation, useNavigate } from "react-router-dom";

import {
	restrictToParentElement,
	restrictToWindowEdges,
	restrictToFirstScrollableAncestor,
} from "@dnd-kit/modifiers";
import ErrorSound from "/Wrong.mp3";
import rightSound from "/Corect.mp3";
// Import all image of sound icon
import soundicon from "../assets/Volume.png";
import { wordCvc4 } from "../utils/dndItemsGame";
import ModalChoice from "./Modals/ModalChoice";

const IntermidiateStage2 = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const qGender = queryParams.get("gender");
	const navigate = useNavigate();
	// Food items to display in the side and to be dragged

	const [foodItems, setFoodItems] = useState([]);
	const [rightCounter, setRightCounter] = useState(0);

	useEffect(() => {
		function getRandomElements(arr, numElements) {
			const shuffled = arr.slice(); // Create a copy to avoid modifying the original array
			const selected = [];
			for (let i = 0; i < numElements; i++) {
				const randomIndex = Math.floor(Math.random() * (shuffled.length - i)); // Adjust for shrinking array
				selected.push(shuffled.splice(randomIndex, 1)[0]);
			}
			return selected;
		}

		const x = getRandomElements(wordCvc4, 6);
		setFoodItems(x);
	}, [wordCvc4]);

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
	const [modalClosing, setModalClosing] = useState(false);
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
			setModalData({
				id: item.id,
				modalChoices: item.modalChoices,
				audio: item.audio,
				isDisplayed: item.isDisplayed,
				image: item.image,
			});
			// setTimeout(() => {
			setModalActive(true);
			setTimeout(() => {
				audioRef.current.play();
			}, 500);
			// }, 100);

			setIsModalAnswerCorrect(false);
		}
	};

	useEffect(() => {
		const ft = [...foodItems] || [];
		let right = rightCounter;

		if (modalActive && wrongItem) {
			console.log("mddddd");
			const md = modalData;

			setFoodItems((foodItems) =>
				foodItems.map((f) => (f.id === md.id ? { ...f, isDisplayed: true } : f))
			);
			setTimeout(() => {
				setModalData({
					item: "",
					modalChoices: [],
					audio: null,
					image: null,
					isDisplayed: false,
				});
			}, 150);
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
					setScale((scale) => scale + 0.15);
				}, 1000);
				right = right + 1;
				setRightCounter(right);
			}

			setWrongItem(false);

			let itD = itemDone + 1;

			setItemDone(itD);

			if (right === 6) {
				setTimeout(() => {
					let gd = "boy";

					if (qGender) {
						gd = qGender.toLowerCase();
					}

					navigate(`/IS2TY?gender=${gd}`);
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
			<video
				autoPlay
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
			<audio autoPlay loop src={"/BgMusic.mp3"} />
			<audio ref={audioRef2} src={ErrorSound} />
			<audio ref={audioRef3} src={rightSound} />
			<div className="drag-n-drop-container">
				<DndContext
					onDragEnd={handleDragEnd}
					modifiers={[restrictToWindowEdges]}
				>
					{/* Container for the droppable zone */}
					<div className="droppable-container">
						<DroppableZone scale={scale}>
							{isFoodItemDropped && (
								<div className="dropped-item">
									<img
										src={currentFoodItem}
										alt="dropped-item"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "contain",
										}}
									/>
								</div>
							)}
						</DroppableZone>
						<div
							className={
								qGender === "girl"
									? "droppable-zone-girl-int"
									: "droppable-zone-boy-int"
							}
						></div>
					</div>

					{/* Container for the food items */}
					<div className="draggable-container">
						<div className="foods-container">
							{foodItems.map(({ id, image, modalChoices, isDisplayed }, i) => {
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
				className={`modal ${modalActive ? `modal-active` : `modal-notActive`} ${
					modalClosing ? "modal-closing" : ``
				}`}
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
									isModalAnswerCorrect={isModalAnswerCorrect}
									setIsModalAnswerCorrect={setIsModalAnswerCorrect}
									tries={tries}
									setTry={setTry}
									setWrongItem={setWrongItem}
									playWrongSound={playWrongSound}
									wrongItem={wrongItem}
									setModalClosing={setModalClosing}
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

export default IntermidiateStage2;

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
		<div style={style} className="droppable-zone-bunny" ref={setNodeRef}>
			{props.children}
		</div>
	);
};
