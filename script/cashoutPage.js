// console.log("Cashout functionality loading");

/*
document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1. Get the agent number and validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }

    // 2. Get the amount and validate
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // 3. Get the current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4. Calculate the new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    // 5. Get the pin and validate
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;

    if(pin === "1234"){
        alert("Cashout successfully");
        console.log("New Balance:", newBlance);
        balanceElement.innerText = newBlance;
    }
    else{
        alert("Invalid Pin");
        return;
    }
})
*/

// Solve using common function
document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1. Get the agent number
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }
    // 2. Get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");
    // 3. Get the current balance
    const currentBalance = getBalance();
    // 4. Calculate the current balance
    const newBalance = currentBalance- Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    // 5. Verify the pin
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cashout successfully");
        console.log("New Balance", newBalance);
        // document.getElementById("balance").innerText = newBalance;
        setBalance(newBalance);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})