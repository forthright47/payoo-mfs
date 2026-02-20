// console.log("Add money functionality loading");

document.getElementById("add-money-btn").addEventListener("click", function(){
    // console.log("Add money button clicked");

    // 1. Get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select bank"){
        alert("Please select a bank");
        return;
    }
    // 2. Get the bank account number
    const accountNumber = getValueFromInput("add-money-number");
    if(accountNumber.length != 11){
        alert("Invalid Account Number");
        return;
    }
    // 3. Get the amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    // console.log(newBalance);

    // 4. Get the pin
    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Money added successfully from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        // 1. Get history-container
        const history = document.getElementById("history-container");
        // 2. Create new div
        const newHistory = document.createElement("div");
        // 3. Add innerHTML to the new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl">
            Money added successfully from ${bankAccount}, Account No. ${accountNumber} at ${new Date()}
        </div>
        `;
        // 4. Append new div to the history-container
        history.append(newHistory);
    }
    else{
        alert("Invalid pin");
        return;
    }
})