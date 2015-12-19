import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
import configureStore from './store/index';
import { calculateLoan } from 'mortgage-calc';


const appRoot = document.getElementById('app-host');
render(<Root store={configureStore({
    loan: calculateLoan({
    	loanAmount: 210000,
    	startDate: new Date(),
    	months: 180,
    	paymentAmount: 1700,
    	interestRate: 2.8,
    	monthlyExtra: 0,
    	yearlyExtra: 0
    })
})} />, appRoot);


//import Splash from './containers/splash';
// render(<Splash />, appRoot);

// loadAllTracks().then(tracks => {
// 	const store = configureStore({
// 		tracksById: tracks.reduce((obj, track) => {
// 			obj[track.id] = track;
// 			return obj
// 		}, {})
// 	});
// 	render(<Root store={store} />, appRoot);
// });