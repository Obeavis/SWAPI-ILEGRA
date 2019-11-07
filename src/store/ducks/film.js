import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
	film: ['film'],
	filmError: ['status'],
	filmNotFound: ['status']
});

//Reducer Handlers
const INITIAL_STATE = {
	film: null,
	error: false,
	filmNotFound: false
}

const film = (state = INITIAL_STATE, action) => {
	return { ...state, film: action.payload };
}

const filmError = (state = INITIAL_STATE, action) =>{
    return { ...state, error: action.payload };
};

const filmNotFound = (state = INITIAL_STATE, action) =>{
    return { ...state, filmNotFound: action.payload };
};


//Criando Reducer
export default createReducer(INITIAL_STATE, {
	[Types.FILM]: film,
	[Types.FILM_ERROR]: filmError,
	[Types.FILM_NOT_FOUND]: filmNotFound
});
