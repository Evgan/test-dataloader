import { all } from 'redux-saga/effects'

import { saga as authSaga } from '../ducks/auth'
import { saga as hostsSaga } from '../ducks/hosts'
import { saga as connectingSSSaga } from '../ducks/connectingSS'

export default function* () {
    yield all([
        authSaga(),
        hostsSaga(),
        connectingSSSaga()
    ])
}
