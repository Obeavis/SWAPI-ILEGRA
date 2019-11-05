import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
	films: {},
	filmsError: ['status']
});

//Reducer Handlers
const INITIAL_STATE = {
	films: {},
	error: false
}

const films = (state = INITIAL_STATE, action) => {
	const newState = { ...state };
	newState.films = action.payload;
	return newState;
}

const filmsError = (state = INITIAL_STATE, action) =>{
    return { ...state, error: action.payload };
};


//Criando Reducer
export default createReducer(INITIAL_STATE, {
	[Types.FILMS]: films,
	[Types.FILMS_ERROR]: filmsError
});
