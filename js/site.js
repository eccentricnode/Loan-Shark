function getValues(){
    let loanAmt = document.getElementById("loanAmountInput").value;
    let payments = document.getElementById("paymentsInput").value;
    let interestRate = document.getElementById("rateInput").value;

    loanAmt = parseInt(loanAmt);
    payments = parseInt(payments);
    interestRate = parseInt(interestRate);

    if (Number.isInteger(loanAmt) && Number.isInteger(payments) && Number.isInteger(interestRate)) {
        
        calculateLoan(loanAmt, payments, interestRate);

        displayLoan();
    } else {
        alert("You must only enter numbers.")
    }
}

function calculateLoan(loanAmt, payments, interestRate) {
    totalMonthlyPayment = (loanAmt * (interestRate / 1200) / (1 - (1 + (interestRate / 1200))**(-60)));
    totalCost = totalMonthlyPayment * payments;
    totalInterest = totalCost - loanAmt;

    console.log(totalMonthlyPayment);
    console.log(totalCost);
    console.log(totalInterest);

    for (let index = 0; index <= payments; index++) {
        
    }
}

function displayLoan() {

}


// entry function, which rinses the dom 
 
// grab the three form values, from the form values

// push the values into logic function

//logic function <-------

// display function, generate a table, with interated values, push values to monthly payment section