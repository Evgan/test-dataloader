import {takeLatest, put, call} from 'redux-saga/effects'
import {Nullable} from "../../helpers/CommonTypes"
import {
    ActionsType,
    InitSuccessResType,
    IInit,
    StateType, IAddHost, AddHostSuccessResType
} from './hostsTypes'
import {notificationService} from "../../services/Notifications/notificationService"
import {ApiCAll} from "../../services/axio/axiosApiCallWrapper"

export enum ActionKeys {
    INIT ='INIT_hosts',
    INIT_SUCCESS = 'INIT_SUCCESS_hosts',
    ADD_HOST = 'ADD_HOST',
    ADD_HOST_SUCCESS = 'ADD_HOST_SUCCESS',
    DESTROY = 'DESTROY_uploadServer',
    DESTROY_IS_FETCHING= 'DESTROY_IS_FETCHING',
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
        case ActionKeys.ADD_HOST_SUCCESS: {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
        case ActionKeys.DESTROY: {
            return {
                ...state
            }
        }
        case ActionKeys.DESTROY_IS_FETCHING: {
            return {
                ...state,
                isFetching: false
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
        // ords/rtdl/control/host/
        const res = yield call(ApiCAll, "GET", 'ords/rtdl/control/host/', null, true)
        const resData: InitSuccessResType = {
            data: res.items
        }
        yield put({
            type: ActionKeys.INIT_SUCCESS,
            payload: resData
        })
    } catch (e) {
        notificationService.error('Что то пошло не так (hosts)')
        yield put({
            type: ActionKeys.DESTROY_IS_FETCHING
        })
    }
}

function* AddHostSaga(props: IAddHost) {
    try {
        // comments
        // users
        // ords/rtdl/control/host/
        const res = yield call(ApiCAll, "POST", 'ords/rtdl/control/host/', props.payload, true)
        const resData: AddHostSuccessResType = res
        yield put({
            type: ActionKeys.ADD_HOST_SUCCESS,
            payload: resData
        })
    } catch (e) {
        notificationService.error('Что то пошло не так (hosts)')
    }
}

export function* saga(){
    yield takeLatest<IInit>(ActionKeys.INIT, InitSaga)
    yield takeLatest<IAddHost>(ActionKeys.ADD_HOST, AddHostSaga)
}

