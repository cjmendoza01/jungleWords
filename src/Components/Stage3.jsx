import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Boy.css";

import { randonFoodGetter } from "../utils/imageAssetPicker";

export default Stage3 = () => {
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

	return <main className="main"></main>;
};
