import { all,fork} from 'redux-saga/effects';
// import {watchIcrementAsync} from "./counter";
// import {watchFetchUser} from "./user";
// import * as counterSagas from './counter';
// import * as userSagas from './user';
import {counterSagas} from "./counter";
import {userSagas} from "./user";

export default function* rootSage() {
    // yield all([
    //     watchIcrementAsync(),
    //     watchFetchUser()
    // ])
    yield all([
        ...counterSagas,
        ...userSagas
    ])
}