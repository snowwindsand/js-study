/**
 * Created by Administrator on 2016/7/4.
 */

import * as ActionTypes from '../actions';

export function musers(state = 0, action) {
	switch (action.type) {
		case ActionTypes.MINUS_USER:
			return state - 1;
		default:
			return state;
	}
}