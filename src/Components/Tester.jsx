import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

function DraggableItem() {
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
			Drag me
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
		backgroundColor: isActive ? "lightgreen" : "lightcoral",
		marginTop: "20px",
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

export default function Tester() {
	return (
		<DndContext onDragEnd={handleDragEnd}>
			<DraggableItem />
			<DroppableZone id="zone1" label="Zone 1 - Accepts" isActive={true} />
			<DroppableZone id="zone2" label="Zone 2 - Rejects" isActive={false} />
		</DndContext>
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
