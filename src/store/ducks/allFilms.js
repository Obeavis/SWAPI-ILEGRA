import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
	films: ['films'],
	filmsError: ['status']
});

//Reducer Handlers
const INITIAL_STATE = {
	films: null,
	error: false
}

const films = (state = INITIAL_STATE, action) => {
	return { ...state, films: action.payload };
}


const filmsError = (state = INITIAL_STATE, action) => {
	return { ...state, error: action.payload };
};


//Criando Reducer
export default createReducer(INITIAL_STATE, {
	[Types.FILMS]: films,
	[Types.FILMS_ERROR]: filmsError
});
