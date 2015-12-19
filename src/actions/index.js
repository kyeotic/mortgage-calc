import { calculateLoan } from 'mortgage-calc';

export const UPDATE_LOAN = 'UPDATE_LOAN';

export function updateLoan(loan) {
    return {
        type: UPDATE_LOAN,
        loan: calculateLoan(loan)
    };
}