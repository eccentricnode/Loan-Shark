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
    // total calculated principal, for the entire payment period
    let totalPrincipal = 0;

    totalMonthlyPayment = (loanAmt * (interestRate / 1200) / (1 - (1 + (interestRate / 1200))**(-60)));
    totalCost = totalMonthlyPayment * payments;

    // interest for entire payment period
    totalInterest = totalCost - loanAmt;

    for (let index = 1; index <= payments; index++) {
        let paymentObj = {};

        individualMonthlyInterest = remainingBalance * (3/1200);

        // calculate the principal for each month
        monthlyPrincipal = totalMonthlyPayment - individualMonthlyInterest;
        
        //calculate total interest for the payment period
        totalPrincipal = totalPrincipal + monthlyPrincipal;

        // calculate incremental total interest.
        currentTotalInterest = currentTotalInterest + individualMonthlyInterest;

        // calculate remaining balance (previous remaining balance - principal payments)
        remainingBalance = (remainingBalance - monthlyPrincipal);



        paymentObj.month = index;
        paymentObj.totalCost = Math.round(100*totalCost)/100;
        paymentObj.totalInterest = Math.round(100*currentTotalInterest)/100;
        paymentObj.totalPrincipal = Math.round(100*totalPrincipal)/100;
        paymentObj.monthlyPayment = Math.round(100*totalMonthlyPayment)/100;
        paymentObj.monthlyPrincipal = Math.round(100*monthlyPrincipal)/100;
        paymentObj.individualMonthlyInterest = Math.round(100*individualMonthlyInterest)/100;
        paymentObj.currentRemainingBalance = Math.round(100*remainingBalance)/100;

        loanData.push(paymentObj);
    }
    return loanData;
}

function displayLoan(loanData) {

    document.getElementById("monthlyPayment").innerHTML = loanData[0].monthlyPayment;
    document.getElementById("totalPrincipal").innerHTML = loanData[0].totalPrincipal;
    document.getElementById("totalInterest").innerHTML = loanData[0].totalInterest;
    document.getElementById("totalCost").innerHTML = loanData[0].totalCost;
    
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("loanInfoTemplate");

    tableBody.innerHTML = "";

    for (let index = 0; index < loanData.length; index++) {
        let tableRow = document.importNode(templateRow.content, true);
        
        rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = loanData[index].month;
        rowCols[1].textContent = loanData[index].monthlyPayment;
        rowCols[2].textContent = loanData[index].monthlyPrincipal;
        rowCols[3].textContent = loanData[index].individualMonthlyInterest;
        rowCols[4].textContent = loanData[index].totalInterest;
        rowCols[5].textContent = loanData[index].currentRemainingBalance;

        tableBody.appendChild(tableRow);
    }
}
