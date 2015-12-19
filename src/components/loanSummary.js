import React, { Component } from 'react';
import currency from 'util/currency';
import moment from 'moment';

export default class LoanSummary extends Component {
	render() {
		return (
		    <div className="container">
		        <h2>{'Pay Off Date '}<small>{this.props.loan.payOffDate ? moment(this.props.loan.payOffDate).format('MMM YYYY') : ''}</small></h2>
                <h3>{'Total Paid '}<small>{currency(this.props.loan.totalPaid)}</small></h3>
                <h3>{'Total Saved '}<small>{currency(this.props.loan.totalSaved)}</small></h3>
                <h3>{'Total Interest '}<small>{currency(this.props.loan.totalInterest)}</small></h3>
                <h4>{'Payment Amount '}<small>{this.props.loan.paymentAmount}</small></h4>
		    </div>
		);
	}
}