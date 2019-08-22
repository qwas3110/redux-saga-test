import { takeEvery, call,put} from 'redux-saga/effects';
import {FETCH_USER_REQUEST, FETCH_TODOS_REQUEST,FETCH_USER_SUCCEEDED} from "../constants/user";
import axios from 'axios';


function* fetchUser() {
    const user = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put({type: FETCH_USER_SUCCEEDED, user:user});
}

function* fetchTodos() {
    const todos = yield call(axios.get, "https://jsonplaceholder.typicode.com/todos");
    console.log(todos);
}

function* watchFetchUser() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}

function* watchFetchTodos() {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}

export const userSagas = [
    watchFetchUser(),
    watchFetchTodos()
];


