import { takeEvery, put, call} from 'redux-saga/effects'
import {INCREMENT_ASYNC,INCREMENT} from "../constants/counter";
import {increment} from "../actions/counter";


const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));


function* incrementAsync() {
    yield call(delay,2000);
    yield put({type: INCREMENT})
    // yield put(increment())  也可以这么写
}

// 监听该actionn  并触发函数
export function* watchIcrementAsync () {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
};
