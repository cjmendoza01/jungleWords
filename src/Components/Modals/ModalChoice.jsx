import { useEffect, useState } from "react";

export default function ModalChoice({
	image,
	isCorrect,
	setModalActive,
	isModalAnswerCorrect,
	setIsModalAnswerCorrect,
	tries,
	setTry,
	setWrongItem,
	playWrongSound,
	wrongItem,
	setModalClosing,
}) {
	const [status, setStatus] = useState("");

	useEffect(() => {
		if (isModalAnswerCorrect || wrongItem) {
			setTimeout(() => {
				setStatus("");
			}, 700);
		}
	}, [isModalAnswerCorrect, wrongItem]);

	const closing = () => {
		setModalClosing(false);
	};
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
							setModalClosing(true);
							// setTimeout(() => {
							// 	statCH();
							// }, 500);
							setTimeout(() => {
								closing();
								setModalActive(false);
							}, 1000);
							setWrongItem(true);
							setTry(0);
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
						setModalClosing(true);
						setTimeout(() => {
							closing();
							setModalActive(false);
						}, 1000);
					}
				}
			}}
		>
			{image ? <img src={image} alt="letter" /> : null}
		</div>
	);
}
