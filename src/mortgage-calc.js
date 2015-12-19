import moment from 'moment';

let sum = (array, func) => array.reduce((p, c) => p + func(c), 0);

function enforceSchema(loan)  {
  loan.loanAmount = +loan.loanAmount;
  loan.months = +loan.months;
  loan.monthlyExtra = +loan.monthlyExtra;
  loan.yearlyExtra = +loan.yearlyExtra;
  return loan;
}

export function calculateLoan(loanSummary) {
    let loan = enforceSchema(Object.assign({}, loanSummary));
    
    if (loan.months < 1) {
       return Object.assign(loan, {
         paymentAmount: loan.loanAmount,
         payments: [],
         totalInterest: 0,
         totalPaid: 0,
         totalSaved: 0,
         payOffDate: new Date()
       });
    }
    
    loan.effectiveInterestRate = (loan.interestRate / 12) / 100;
    loan.paymentAmount = calculatePaymentAmount(loan.effectiveInterestRate, loan.months, loan.loanAmount);
    
    let originalPayments = calculatePayments(loan.loanAmount
                                        , loan.startDate
                                        , loan.paymentAmount
                                        , loan.effectiveInterestRate
                                        , 0
                                        , 0);
    let payments = calculatePayments(loan.loanAmount
                                        , loan.startDate
                                        , loan.paymentAmount
                                        , loan.effectiveInterestRate
                                        , loan.monthlyExtra
                                        , loan.yearlyExtra);
    
    loan.totalInterest = sum(payments, p => p.interestAmount);
    loan.totalPaid = sum(payments, p => p.payAmount);
    loan.totalSaved = sum(originalPayments, p => p.payAmount) - loan.totalPaid;
    loan.payOffDate = payments.length ? payments[payments.length-1].date.toDate() : null;
    
    loan.payments = payments;
    return loan;
}

function calculatePaymentAmount(effectiveInterestRate, months, amount) {
    var i = effectiveInterestRate, n = months, pv = amount;
     return +((pv * ( i / (1 - Math.pow(1 + i, -n)))).toFixed(2)); 
}

function calculatePayments(loanAmount, startDateToParse, paymentAmount, effectiveInterestRate, monthlyExtra, yearlyExtra) {
  var payments = [],
        amountRemaining = loanAmount,
        payAmount = 0,
        interestAmount = 0,
        interestTotal = 0,
        payTotal = 0,
        startDate = moment(new Date(startDateToParse)),
        trackingDate = startDate.clone();
        
    while (amountRemaining > 0) {
      payAmount = paymentAmount + monthlyExtra;
      
      if (startDate.month() == trackingDate.month())
        payAmount += yearlyExtra;
      
      interestAmount = amountRemaining * effectiveInterestRate;
      amountRemaining = amountRemaining + interestAmount - payAmount;
      interestTotal += interestAmount;
      payTotal += payAmount;
      
      payments.push({
        date: trackingDate.clone(),
        payAmount: +payAmount,
        principalAmount: payAmount - interestAmount,
        interestAmount: interestAmount,
        interestTotal: interestTotal,
        amountRemaining: amountRemaining
      });
      
      trackingDate.add(1, 'months');
    }
    
    return payments;
}