export const nameChecker = (answer, item, level) => {
	const { id } = item;

	const word = id;

	if (answer === word) {
		return true;
	}
	return false;
};

export const vowelChecker = (answer, item, level) => {
	const { id } = item;

	const word = id.toLowerCase();
	const vowels = "aeiou";

	// Find the index of the first vowel
	const firstVowelIndex = Array.from(word).findIndex((char) =>
		vowels.includes(char)
	);

	// If a vowel is found, mark it and return the modified word
	if (firstVowelIndex === -1) {
		return { error: "error no vowel found" };
	}

	if (answer.toLowerCase() === word[firstVowelIndex]) {
		return true;
	} else {
		return false;
	}
};

export const firstLetterChecker = (answer, item, level) => {
	const { id } = item;
	const word = item;

	const firstLetter = word[0];

	if (answer === firstLetter) {
		return true;
	}
	return false;
};
