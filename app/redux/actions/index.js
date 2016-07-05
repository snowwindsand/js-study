export const ADD_USER = 'add_user';
export const MINUS_USER = 'minus_user';

export const addUser = () => {
	return {
		type: ADD_USER
	}
}


export const minusUser = () => {
	return {
		type: MINUS_USER
	}
}