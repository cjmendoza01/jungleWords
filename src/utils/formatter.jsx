export const Qfilters = (answer, questions) => {
	const qs = questions || [];

	const formatQuestions = qs.filter((q) => {
		return q.id !== answer.id;
	});

	return formatQuestions;
};

export const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const reShuffle = (arr) => {
	if (arr.length === 0) {
		return arr; // If the array is empty, return it as is
	}

	const firstElement = arr.shift();
	arr.push(firstElement);
	return arr;
};
