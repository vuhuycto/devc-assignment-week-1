(function () {
	const _rightNumber = Symbol();
	const _tries = Symbol();

	class GuessingGame {
		constructor(number) {
			this[_rightNumber] = number;
			this[_tries] = 10;
		}

		guess(number) {
			const message = document.getElementById('message');

			if (this[_tries] === 0) {
				message.textContent =
					'Sorry, you cannot guess because you have used all your 10 guesses!';
				return;
			}

			this[_tries]--;

			if (number == this[_rightNumber]) {
				message.style.backgroundColor = 'lightgreen';
				message.textContent = `Congratulations! ${
					this[_rightNumber]
				} was the correct number! It took you ${
					10 - this[_tries]
				} tries to guess the answer`;
			} else {
				message.style.backgroundColor = 'red';
				if (number < this[_rightNumber]) {
					message.textContent = `Sorry your guess is too low! You have ${this[_tries]} guesses left`;
				} else {
					message.textContent = `Sorry your guess is too high! You have ${this[_tries]} guesses left`;
				}
			}
		}
	}

	const app = new GuessingGame(Math.floor(Math.random() * 99));

	const guessButton = document.getElementById('guessButton');
	guessButton.addEventListener('click', function () {
		const guessNumber = document.getElementById('number').value;
		console.log(guessNumber);
		app.guess(guessNumber);
	});
})();
