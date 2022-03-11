import {notificationService} from "../../services/Notifications/notificationService"
import {ApiCAll} from "../../services/axio/axiosApiCallWrapper"
import {Nullable} from '../../helpers/CommonTypes'
import {
    ActionsType,
    InitSuccessResType,
    IInit,
    StateType
} from './connectingSSTypes'
import {call, put, takeLatest} from 'redux-saga/effects'

export enum ActionKeys {
    INIT ='INIT_connectingSS',
    INIT_SUCCESS = 'INIT_SUCCESS_connectingSS',
    DESTROY = 'DESTROY_connectingSS'
}

export const initialState = {
    data: null as Nullable<object[]>,
    isFetching: false
}


export default function reducer(state: StateType = initialState, action: ActionsType): StateType {
    switch (action.type) {
        case ActionKeys.INIT: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case ActionKeys.INIT_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.payload.data
            }
        }
        case ActionKeys.DESTROY: {
            return {
                ...state
            }
        }
        default:
            return state
    }
}

/**
 *  Sagas
 */

function* InitSaga(props: IInit) {
    try {
        // comments
        // users
        const res = yield call(ApiCAll, "GET", 'comments', null, true)
        const resData: InitSuccessResType = {
            data: res
        }
        yield put({
            type: ActionKeys.INIT_SUCCESS,
            payload: resData
        })
    } catch (e) {
        notificationService.error('Что то пошло не так (hosts)')
    }
}

export function* saga(){
    yield takeLatest<IInit>(ActionKeys.INIT, InitSaga)
}
