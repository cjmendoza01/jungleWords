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
