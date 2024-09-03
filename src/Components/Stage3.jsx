import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Boy.css";

import { randonFoodGetter } from "../utils/imageAssetPicker";

function DraggableItem(item) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "draggable",
	});

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: "",
		width: 100,
		height: 100,
		backgroundColor: "lightblue",
	};

	return (
		<div ref={setNodeRef} style={style} {...listeners} {...attributes}>
			Draggable Item
		</div>
	);
}

function DroppableZone({ id, label, isActive }) {
	const { setNodeRef } = useDroppable({
		id: id,
	});

	const style = {
		width: 200,
		height: 200,
		// backgroundColor: isActive ? "lightgreen" : "lightcoral",
		// marginTop: "20px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "2px dashed black",
	};

	return (
		<div ref={setNodeRef} style={style}>
			{label}
		</div>
	);
}

export default function Stage3() {
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
			<div style={{ display: "block" }}>
				<div style={{ display: "flex" }}></div>
				<div>
					<DndContext onDragEnd={handleDragEnd}>
						<div style={{ display: "flex", gap: "10%" }}>
							<DroppableZone
								id={rightItems[0].id || ""}
								label="Zone 1"
								isActive={true}
							/>
							<DraggableItem />
							<DroppableZone
								id={wrongItems[0].id || ""}
								label="Zone 2"
								isActive={false}
							/>
						</div>
					</DndContext>
				</div>
			</div>
		</main>
	);

	function handleDragEnd(event) {
		const { over } = event;

		if (over) {
			if (over.id === "zone1") {
				console.log("Dropped in Zone 1: Item accepted");
				// Custom logic for Zone 1
			} else if (over.id === "zone2") {
				console.log("Dropped in Zone 2: Item rejected");
				// Custom logic for Zone 2
			}
		} else {
			console.log("Dropped outside of any zone");
			// Logic when item is dropped outside any droppable area
		}
	}
}
