import * as ActionTypes from '../actions'

export function ausers(state = 0, action) {
	switch (action.type) {
		case ActionTypes.ADD_USER:
			return state + 1;
		default:
			return state;
	}
}