export const Qfilters = (answer, questions) => {
	const qs = questions || [];

	const formatQuestions = qs.filter((q) => {
		return q.id !== answer.id;
	});

	return formatQuestions;
};
