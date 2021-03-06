/**
 * Created by Administrator on 2016/7/4.
 */

import React from 'react'
import {
	render
} from 'react-dom'
import {
	Provider
} from 'react-redux'
import {
	createStore
} from 'redux'
import App from './components/App'
import configureStore, {
	configureStoreSimple
} from './store/configureStore'

let store = configureStore()

render(
	<Provider store={store}>
        <App />
        </Provider>,
	document.getElementById('root')
)