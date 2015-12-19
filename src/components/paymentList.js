import React, { Component } from 'react';
import currency from 'util/currency';
import moment from 'moment';

export default class PaymentList extends Component {
	render() {
		let payments = this.props.payments.map(p => {
						return (<tr key={p.date}>
				          <td>{moment(p.date).format('MMM YYYY')}</td>
				          <td>{currency(p.payAmount)}</td>
				          <td>{currency(p.principalAmount)}</td>
				          <td>{currency(p.interestAmount)}</td>
				          <td>{currency(p.interestTotal)}</td>
				          <td>{currency(p.amountRemaining)}</td>
				        </tr>);	
					});
		return (
			<div className="container">
			    <table className="table">
			      <thead>
			        <tr>
			          <th>Date</th>
			          <th>Payment</th>
			          <th>Principal</th>
			          <th>Interest</th>
			          <th>Total Interest</th>
			          <th>Balance</th>
			        </tr>
			      </thead>
			      <tbody data-bind="foreach: payments">
			      	{payments}
			      </tbody>
			    </table>
			</div>
		);
	}
}