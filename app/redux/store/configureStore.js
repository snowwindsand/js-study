import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import testApp from '../reducers';

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