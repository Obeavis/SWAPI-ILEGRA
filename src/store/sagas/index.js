import { all } from "redux-saga/effects";
import { getAllFilmsWatcher } from "./allFilms";
import { getFilmWatcher } from "./film";

export default function* rootSaga() {
    yield all([
        getAllFilmsWatcher(),
        getFilmWatcher()
    ]);
}
