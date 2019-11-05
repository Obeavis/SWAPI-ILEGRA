import { takeEvery, put, call } from "redux-saga/effects";
import axios from '../../utils/axios';


const getFilmFromAPi = (filmID) => {
    console.log('filmID: ', filmID)
    return new Promise((resolve, reject) => {
        return axios.request({
            method: "POST",
            headers: {
                "Content-Type": "application/graphql",
            },
            data: `{
                film(filmID: ${filmID}) {
                    episodeID
                    title
                    director
                    releaseDate
                    producers
                    openingCrawl

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
function* getFilm(payload) {

    try {
        const data = yield call(getFilmFromAPi, payload.filmID);

        if (data.status) {
            yield put({ type: "FILM_ERROR", payload: true });
        } else if (data.errors) {
            yield put({ type: "FILM_NOT_FOUND", payload: true });
        } else {
            yield put({ type: "FILM", payload: data.data.film });
            yield put({ type: "FILM_ERROR", payload: false });
        }
    } catch (error) {
        yield put({ type: "FILM_ERROR", payload: true });
    }

}

// //Generator function
export function* getFilmWatcher() {
    yield takeEvery("GET_FILM", getFilm);
}
