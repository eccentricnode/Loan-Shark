function getValues(){
    let loanAmt = document.getElementById("loanAmountInput").value;
    let payments = document.getElementById("paymentsInput").value;
    let interestRate = document.getElementById("rateInput").value;

    loanAmt = parseInt(loanAmt);
    payments = parseInt(payments);
    interestRate = parseInt(interestRate);

    if (Number.isInteger(loanAmt) && Number.isInteger(payments) && Number.isInteger(interestRate)) {
        
        loanData = calculateLoan(loanAmt, payments, interestRate);

        displayLoan(loanData);
    } else {
        alert("You must only enter numbers.")
    }
}

function calculateLoan(loanAmt, payments, interestRate) {
    const loanData = [];
    let remainingBalance = loanAmt;
    // interest amount, beginning after the first payment.
    let currentTotalInterest = 0;

    totalMonthlyPayment = (loanAmt * (interestRate / 1200) / (1 - (1 + (interestRate / 1200))**(-60)));
    totalCost = totalMonthlyPayment * payments;

    // interest for entire payment period
    totalInterest = totalCost - loanAmt;

    console.log(totalMonthlyPayment);
    console.log(totalCost);
    console.log(totalInterest);


    for (let index = 1; index <= payments; index++) {
        let paymentObj = {};

        individualMonthlyInterest = remainingBalance * (3/1200);

        // calculate the principal for each month
        monthlyPrincipal = totalMonthlyPayment - individualMonthlyInterest;
        
        // calculate incremental total interest.
        currentTotalInterest = currentTotalInterest + individualMonthlyInterest;

        // calculate remaining balance (previous remaining balance - principal payments)
        currentRemainingBalance = remainingBalance - totalMonthlyPayment;



        paymentObj.month = index;
        paymentObj.monthlyPayment = Math.round(100*totalMonthlyPayment)/100;
        paymentObj.monthlyPrincipal = Math.round(100*monthlyPrincipal)/100;
        paymentObj.individualMonthlyInterest = Math.round(100*individualMonthlyInterest)/100;
        paymentObj.currentTotalInterest = Math.round(100*currentTotalInterest)/100;
        paymentObj.currentRemainingBalance = Math.round(100*currentRemainingBalance)/100;

        loanData.push(paymentObj);
    }
    return loanData;
}

function displayLoan(loanData) {
    console.log(loanData);
}


// entry function, which rinses the dom 
 
// grab the three form values, from the form values

// push the values into logic function

//logic function <-------

// display function, generate a table, with interated values, push values to monthly payment section