import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Input } from 'react-bootstrap';

export default class LoanDetails extends Component {
    static propTypes = {
        onUpdateLoan: PropTypes.func.isRequired,
        loan: PropTypes.object.isRequired
    }
    update = (newValue) => {
        this.props.onUpdateLoan(Object.assign({}
                                            , this.props.loan
                                            , newValue
                                            , {startDate: new Date()}));
    }
	render() {
		return (
		    <Grid>
		        <Row>
		            <Col xs={6}>
		                <Input label={'Loan Amount'} type="text"
		                       placeholder={'210000'}
		                       value={this.props.loan.loanAmount}
		                       onChange={(e) => this.update({loanAmount: e.target.value})} />
		                <Input label={'Loan Term in Months'} type="text"
		                       placeholder={'36'}
		                       value={this.props.loan.months}
		                       onChange={(e) => this.update({months: e.target.value})} />
		                <Input label={'Interest Rate'} type="text"
		                       placeholder={'4'}
		                       value={this.props.loan.interestRate}
		                       onChange={(e) => this.update({interestRate: e.target.value})} />
		            </Col>
		            <Col xs={6}>
		                <Input label={'Monthly Extra'} type="text"
		                       placeholder={'36'}
		                       value={this.props.loan.monthlyExtra}
		                       onChange={(e) => this.update({monthlyExtra: e.target.value})} />
		                <Input label={'Yearly Extra'} type="text"
		                       placeholder={'36'}
		                       value={this.props.loan.yearlyExtra}
		                       onChange={(e) => this.update({yearlyExtra: e.target.value})} />
		            </Col>
		        </Row>
		    </Grid>
		);
	}
}