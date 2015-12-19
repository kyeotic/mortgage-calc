import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import persistState from 'redux-localstorage';

const createConfiguredStore = compose(
  applyMiddleware(thunkMiddleware)
  , persistState(/*paths, config*/)
)(createStore);

export default function configureStore(initialState) {
  return createConfiguredStore(rootReducer, initialState);
}