import { combineReducers } from 'redux';
import { UPDATE_LOAN } from 'actions/index';


function loan(state = { }, action) {
	switch (action.type) {
	case UPDATE_LOAN:
	    return Object.assign({}, action.loan);
	default:
		return state;
	}
}

const rootReducer = combineReducers({
	loan
});

export default rootReducer;