// console.log("Login functionality loading");

document.getElementById("login-btn").addEventListener("click", function(){
    // console.log("Login button clicked");

    // 1. Get the mobile number input
    const numberInput = document.getElementById("input-number");
    const mobileNumber = numberInput.value;
    console.log(mobileNumber);

    // 2. Get the pin input
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin);

    // 3. Match mobile number and pin
    if(mobileNumber == "01410155520" && pin == "1234"){
        // true > alert > homepage
        alert("Login successfully");

        window.location.assign("home.html");
    }
    else{
        // false > alert > return
        alert("Login failed");
        return;
    }
})