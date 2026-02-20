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
    }
    else{
        alert("Invalid pin");
        return;
    }
})