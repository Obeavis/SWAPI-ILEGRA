import { takeEvery, put, call } from "redux-saga/effects";
import axios from '../../utils/axios';


const gettAllFilmsFromAPi = () => {
	return new Promise((resolve, reject) => {
		return axios.request({
			method: "POST",
			headers: {
				"Content-Type": "application/graphql",
			},
			data: `{
				allFilms{
					films {
						episodeID
						title
						releaseDate
				  }
				}
			  }`
		})
			.then(response => response.status !== 200 ? reject(response) : response)
			.then(response => resolve(response.data))
			.catch(error => {
				resolve(error);
			});
	});
};

//generators
function* getAllFilms() {
	try {
		const data = yield call(gettAllFilmsFromAPi);

		if (data.status || data.errors) {
			yield put({ type: "FILMS_ERROR", payload: true });
		} else {
			yield put({ type: "FILMS", payload: data.data.allFilms.films });
			yield put({ type: "FILMS_ERROR", payload: false });
		}
	} catch (error) {
		yield put({ type: "FILMS_ERROR", payload: true });
	}
}

// //Generator function
export function* getAllFilmsWatcher() {
	yield takeEvery("GET_ALL_FILMS", getAllFilms);
}
