import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import testApp from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [
	thunk, logger()
];

export default function configureStore(initialState) {
	const store = createStore(testApp, initialState, compose(
		applyMiddleware(...middleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	return store;
}


export function configureStoreSimple(initialState) {
	const store = createStore(testApp, initialState,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
	return store;
}