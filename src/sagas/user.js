import { takeEvery, call} from 'redux-saga/effects';
import {FETCH_USER_REQUEST} from "../constants/user";
import axios from 'axios';


function* fetchUser() {
    const user = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    console.log(user);
}
export function* watchFetchUser () {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser)
}

