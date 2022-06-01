// Handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
	// get the deposit amount value
	const depositInput = document.getElementById('deposit-input');

	//update deposit total
	const depositTotal = document.getElementById('deposit-total');
	const previousDepositText = depositTotal.innerText;
	const previousDepositAmount = parseFloat(previousDepositText);
	const depositInputText = depositInput.value;
	const depositInputAmount = parseFloat(depositInputText);
	// console.log(previousDepositAmount, depositInputAmount);

	// display deposit amount
	const newDepositTotal = previousDepositAmount + depositInputAmount;
	depositTotal.innerText = newDepositTotal;

	// update account balance
	const balanceTotal = document.getElementById('balance-total');
	const previousBalanceTotal = balanceTotal.innerText;
	const newBalanceTotal = parseFloat(previousBalanceTotal);
	balanceTotal.innerText = newBalanceTotal + depositInputAmount;

	//clear deposit input field
	depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
	// get withdraw input value
	const withdrawInputText = document.getElementById('withdraw-input');
	const withdrawInputAmount = parseFloat(withdrawInputText.value);
	// get withdraw display total
	const withdrawTotal = document.getElementById('withdraw-total');
	const withdrawTotalText = withdrawTotal.innerText;
	const withdrawTotalAmount = parseFloat(withdrawTotalText);
	// console.log(withdrawTotalAmount, withdrawInputAmount );
	const newWithdrawTotal = withdrawInputAmount + withdrawTotalAmount;
	withdrawTotal.innerText = newWithdrawTotal;

	// update new balance
	const balanceTotal = document.getElementById('balance-total');
	const previousBalanceText = balanceTotal.innerText;
	const previousBalanceAmount = parseFloat(previousBalanceText);
	// const newBalanceTotal =
	// console.log(previousBalanceAmount, newBalanceTotal);
	balanceTotal.innerText = previousBalanceAmount - withdrawInputAmount;

	// Clear withdraw input filed area
	withdrawInputText.value = '';
});
