import {
	combineReducers
} from 'redux';

import {
	ausers
} from './add';
import {
	musers
} from './minus';

const testApp = combineReducers({
	ausers,
	musers
});

export default testApp;