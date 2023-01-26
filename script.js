const allButon = document.querySelectorAll('.player button');
const selectedPlayer = document.querySelector('#selected-player');
let totalPlayer = 0;

setPlayer();
function setPlayer() {
	for (btn of allButon) {
		btn.addEventListener('click', (e) => {
			let player =
				e.target.previousSibling.previousSibling.previousSibling.previousSibling
					.innerText;

			let targatedBtn = e.target;

			console.log(targatedBtn);

			if (totalPlayer < 5) {
				totalPlayer++;
				targatedBtn.setAttribute('disabled', '');
				targatedBtn.classList.add('bg-white');
				targatedBtn.classList.add('text-black');
			} else return alert('cannot add more than five');
			if (player) {
				const playerLi = document.createElement('li');
				const playerSpan = document.createElement('span');
				playerLi.appendChild(playerSpan);
				playerSpan.innerText = player;
				selectedPlayer.appendChild(playerLi);
			}
		});
	}
}

document.getElementById('calculate').addEventListener('click', () => {
	calculatePlayerExpense(totalPlayer);
});
// | inputfield value return function
function getInputFieldValue(inputFiledId) {
	const inputFieled = document.getElementById(inputFiledId);
	const inputFieldValue = parseInt(inputFieled.value);
	return inputFieldValue;
}
// | total Player expanses function
function calculatePlayerExpense(totalPlayer) {
	const playerExpenses = document.getElementById('player-expenses');
	const playerExpenseInputFieldValue = getInputFieldValue('player-input-cost');
	let totalExpenses;
	if (!totalPlayer) return alert('please add sum player');

	if (!playerExpenseInputFieldValue || playerExpenseInputFieldValue <= 0) {
		return alert('please input per player cost && value cannot be nagetive');
	} else {
		totalExpenses = playerExpenseInputFieldValue * totalPlayer;
		playerExpenses.innerText = totalExpenses;
	}
	return totalExpenses;
}

// | Total calculation funtion

document.getElementById('total-calculate').addEventListener('click', () => {
	const totalValue = document.getElementById('total');
	const managerInputFieldValue = getInputFieldValue('manager-input-cost');
	const coachInputFieldValue = getInputFieldValue('coach-input-cost');
	const playerExpenses = calculatePlayerExpense(totalPlayer);

	const isNagetiveValue =
		managerInputFieldValue < 0 || coachInputFieldValue < 0;
	if (!playerExpenses || isNagetiveValue)
		return alert('value cannot be nagetive or empty');
	if (managerInputFieldValue || coachInputFieldValue) {
		const total =
			managerInputFieldValue + coachInputFieldValue + playerExpenses;
		totalValue.innerText = total;
	} else return alert('please fill the input field');
});
