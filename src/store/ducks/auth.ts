import { put, takeLatest, call } from "redux-saga/effects"
import { push } from 'connected-react-router'
import Cookies from 'js-cookie'

import {ApiCAll} from "../../services/axio/axiosApiCallWrapper"
import {ImitationApiCAll} from '../../helpers/testImitationFetch'

import {Nullable} from "../../helpers/CommonTypes"
import {
    ISingIn,
    SignInSuccessResType,
    StateType,
    ActionsType
} from "./authTypes"
import {isImitationFetch} from '../../helpers/envProps'

export enum ActionKeys {
    SIGN_IN ='SIGN_IN_auth',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS_auth',
    SIGN_IN_FAIL = 'SIGN_IN_FAIL_auth'
}

export const initialState = {
    token: null as Nullable<string>,
    isFetching: false,
    isError: false,
    msgError: ''
}

export default function reducer(state: StateType = initialState, action: ActionsType): StateType {
    switch (action.type) {
        case ActionKeys.SIGN_IN: {
            return {
                ...state,
                isFetching: true,
                isError: false,
                msgError: ''
            }
        }
        case ActionKeys.SIGN_IN_SUCCESS: {
            const token:string = action.payload.token
            const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000)
            Cookies.set('token', token, { expires: inOneHour })

            return {
                ...state,
                token,
                isFetching: false,
            }
        }
        case ActionKeys.SIGN_IN_FAIL: {
            return {
                ...state,
                isFetching: false,
                isError: true,
                msgError: action.payload
            }
        }
        default:
            return state
    }
}


/**
 *  Sagas
 */


/*
POST

Payload:
p_flow_id: 108
p_flow_step_id: 9999
p_instance: 17564889472067
p_debug:
p_request: LOGIN
p_reload_on_submit: S
p_page_submission_id: 63695606205930230662982767309907375660
p_json: {"pageItems":{"itemsToSubmit":[{"n":"P9999_USERNAME","v":"Evganiy.Penkrat"},{"n":"P9999_PASSWORD","v":"Evgan25021986"},{"n":"P9999_AUTO_LOGIN","v":[]}],"protected":"ZezK8jvfeOc159ZlcSNlgg","rowVersion":"","formRegionChecksums":[]},"salt":"63695606205930230662982767309907375660"}


 */

function* signInSaga(props: ISingIn) {
    try {
        const data = props.payload.formData

        const path: string = 'ords/wwv_flow.accept'
        const res = !isImitationFetch
            ? yield call(ImitationApiCAll, true, data)
            : yield call(ApiCAll, "POST", path, data)
        console.log('res:')
        console.log(res)

        yield put({
            type: ActionKeys.SIGN_IN_SUCCESS,
            payload: res as SignInSuccessResType
        })
        yield put(push(props.payload.redirectPath || '/'))
    } catch (e) {
        const errorDesc =
            e.data?.errorMessage
        ||  e.message
        || 'Неверный логин или пароль'
        yield put({
            type: ActionKeys.SIGN_IN_FAIL,
            payload: errorDesc
        })
    }
}


export function* saga(){
    yield takeLatest<ISingIn>(ActionKeys.SIGN_IN, signInSaga)
}
