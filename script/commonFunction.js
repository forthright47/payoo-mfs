// console.log("Common function added");

// function: id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// function: return current balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance:", Number(balance));
    return Number(balance);
}

// function: set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// function: id > hide all > show specific id
function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    // console.log(`Add Money - ${addMoney}, Cashout - ${cashOut}`);

    // hide all
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");

    // select the passed id element and remove hidden class from it
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}