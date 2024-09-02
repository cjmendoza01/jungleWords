import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Boy.css";
import stage1Done from "../assets/buttons&dialogues/stage1Done.png";

// Import all image of sound icon
import soundicon from "../assets/Volume.png";
import { randonFoodGetter } from "../utils/imageAssetPicker";

export default Stage2 = () => {
	const [rightItems, setItems] = useState([]);
	const [wrongItems, setWrongItems] = useState([]);

	const [dropZoneStatus, setDropZoneStatus] = useState({
		left: true,
		right: true,
		center: false,
	});

	const changeStat = (zone) => {
		switch (zone) {
			case "left":
				setDropZoneStatus({ left: false, right: true, center: true });
				break;
			case "rigth":
				setDropZoneStatus({ left: true, right: false, center: true });
				break;

			default:
				setDropZoneStatus({ left: true, right: true, center: false });
		}
	};

	useEffect(() => {
		const items = randonFoodGetter(8);
		const wrnItems = randonFoodGetter(8, items);

		setItems(items);
		setWrongItems(wrnItems);
	}, []);

	return (
		<main className="main">
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
							{/* Iterating over the food items and displaying it */}
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
		</main>
	);
};

// export default BeginnerStage1Boy;

// Component for the food item
const FoodItem = ({ id, modalChoices, children }) => {
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({
			id: id,
			data: { choices: modalChoices },
		});

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
	const { isOver, setNodeRef } = useDroppable({
		id: "droppable-zone",
	});
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
}) => {
	// Status whether the choice selected is right or wrong
	const [status, setStatus] = useState("");

	return (
		<div
			className={`choice ${status}`}
			onClick={(e) => {
				// If the correct answer is already selected, prevent any further selection
				if (isModalAnswerCorrect) {
					e.preventDefault();
				} else {
					// If the correct answer is not yet selected, then...
					// If selected choice is not the correct answer, set status to wrong
					if (!isCorrect) {
						setStatus("wrong");
					} else {
						// If selected choice is the correct answer, then...
						setStatus("right");
						setIsModalAnswerCorrect(true);

						// Close modal after 2 seconds
						setTimeout(() => {
							setModalActive(false);
						}, 2 * 1000);
					}
				}
			}}
		>
			{image ? <img src={image} alt="letter" /> : label}
		</div>
	);
};
