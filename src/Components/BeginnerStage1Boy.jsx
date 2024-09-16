import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Boy.css";
import stage1Done from "../assets/buttons&dialogues/stage1Done.png";
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import
import { useNavigate } from "react-router-dom";

// Import all image of sound icon
import soundicon from "../assets/Volume.png";
import { foodItemsList } from "../utils/imageAssetPicker";

const BeginnerStage1Boy = () => {
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

		const x = getRandomElements(foodItemsList, 6); // Adjust to select 6 items
		setFoodItems(x);
	}, [foodItemsList]);

	const [currentFoodItem, setCurrentFoodItem] = useState(null);
	const [isFoodItemDropped, setIsFoodItemDropped] = useState(false);
	const [modalData, setModalData] = useState({
		item: "",
		choices: [],
		audio: null,
	});
	const [modalActive, setModalActive] = useState(false);
	const [isModalAnswerCorrect, setIsModalAnswerCorrect] = useState(false);
	const [scale, setScale] = useState(1);
	const [tries, setTry] = useState(0);
	const [wrongItem, setWrongItem] = useState(false);
	const [itemDone, setItemDone] = useState(0);
	const audioRef = useRef();

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
				choices: item.modalChoices,
				audio: item.audio,
			});
			setModalActive(true);
			setIsModalAnswerCorrect(false);
		}
	};

	useEffect(() => {
		if ((isModalAnswerCorrect && !modalActive) || wrongItem) {
			setTimeout(() => {
				setCurrentFoodItem("");
				setIsFoodItemDropped(false);
			}, 500);

			if (!wrongItem) {
				setTimeout(() => {
					setScale((scale) => scale + 0.05);
				}, 1000);

				let right = rightCounter + 1;

				setRightCounter(right);
			}

			setWrongItem(false);

			let itD = itemDone + 1;

			setItemDone(itD);

			if (itD === 6) {
				setTimeout(() => {
					navigate("/BS1GJBoy");
				}, 1000);
			}
		}
	}, [isModalAnswerCorrect, modalActive, wrongItem]);

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page
	};
	return (
		<main className="main">
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
								<div className="dropped-item">
									<img src={currentFoodItem} alt="dropped-item" />
								</div>
							)}
						</DroppableZone>
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
										<img src={image} alt={id} />
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
			{modalActive && (
				<div className="modal">
					<div className="modal-backdrop"></div>
					<div className="modal-container">
						<div className="soundicon" onClick={() => audioRef.current.play()}>
							<img src={soundicon} alt="soundicon" />
						</div>
						<audio ref={audioRef} src={modalData.audio} />

						<div className="choices">
							{modalData.choices.map(({ image, isCorrect }, i) => {
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
									/>
								);
							})}
						</div>
					</div>
				</div>
			)}
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
		backgroundColor: isOver ? "green" : undefined,
		transform: "scale(" + props.scale + ")",
	};

	return (
		<div style={style} className="droppable-zone" ref={setNodeRef}>
			{props.children}
		</div>
	);
};

// Component for the modal/popup choices
const ModalChoice = ({
	image,
	isCorrect,
	setModalActive,
	isModalAnswerCorrect,
	setIsModalAnswerCorrect,
	tries,
	setTry,
	setWrongItem,
}) => {
	const [status, setStatus] = useState("");
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
						if (tr === 2) {
							setTimeout(() => {
								setModalActive(false);
							}, 1000);
							setWrongItem(true);
							setTry(0);
						} else {
							setTry(tr);
						}
					} else {
						setStatus("right");
						setIsModalAnswerCorrect(true);
						setTimeout(() => {
							setModalActive(false);
						}, 2000);
					}
				}
			}}
		>
			{image ? <img src={image} alt="letter" /> : label}
		</div>
	);
};
