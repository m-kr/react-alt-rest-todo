export function fancyInputLabel(input) {
	if (!input) {
		return;
	}

	const inputValue = input.value;
	if (!inputValue || !inputValue.length) {
		input.classList.remove('has-value');
	} else {
		input.classList.add('has-value');
	}

	input.addEventListener('blur', (e) => {
		const inputValue = input.value;
		if (!inputValue || !inputValue.length) {
			input.classList.remove('has-value');
		} else {
			input.classList.add('has-value');
		}
	});
}