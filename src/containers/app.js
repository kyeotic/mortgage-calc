import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateLoan } from 'actions/index';
import LoanDetails from 'components/loanDetails';
import LoanSummary from 'components/loanSummary';
import PaymentList from 'components/paymentList';

@connect(state => ({ loan: state.loan }),
	{ updateLoan }
)
export default class App extends Component {
    static propTypes = {
        loan: PropTypes.object.isRequired,
        updateLoan: PropTypes.func.isRequired
    }
	render() {
	    const { updateLoan, loan } = this.props;
		return (
		    <div>
		        <LoanDetails loan={loan} onUpdateLoan={updateLoan} />
    			<LoanSummary loan={loan} />
    			<PaymentList payments={loan.payments} />
		    </div>
		);
	}
}