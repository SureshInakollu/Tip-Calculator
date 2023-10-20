let billamountElement = document.getElementById("billAmount");
//console.log(billamountElement);
let percentagetipElement = document.getElementById("percentageTip");
//console.log(percentagetipElement);
let tipamountElement = document.getElementById("tipAmount");
//console.log(billamountElement);
let totalamountElement = document.getElementById("totalAmount");
//console.log(totalamountElement);
let errormessageElement = document.getElementById("errorMessage");
//console.log(errormessageElement);
let errorMessage = "Please Enter A Valid Input";

function calculate(){
    let billAmount = (billamountElement.value);
    console.log(billAmount)
    let percentageTip = (percentagetipElement.value);
    console.log(percentageTip)

    if (billAmount === "" || percentageTip === "") {
        errormessageElement.textContent = errorMessage;
    }
    else {
        let billAmount = parseInt(billamountElement.value);
        let percentageTip = parseInt(percentagetipElement.value);
        let calculateTip = (percentageTip / 100) * billAmount;

        tipamountElement.value = calculateTip;

        let totalAmount = billAmount + percentageTip;
        totalamountElement.value = totalAmount;
    }
}