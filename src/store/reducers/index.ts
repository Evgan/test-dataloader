import { combineReducers } from 'redux'
import { connectRouter } from "connected-react-router"
import {StateType} from "typesafe-actions"

import authReducer from '../ducks/auth'
import modalsReducer from '../ducks/modals'
import hostReducer from '../ducks/hosts'
import connectingSSReducer from '../ducks/connectingSS'

const rootReducer = (history:any) => combineReducers({
    auth: authReducer,
    modals: modalsReducer,
    hosts: hostReducer,
    connectingSS: connectingSSReducer,
    router: connectRouter(history),
})

export default rootReducer

export type RootStateType = StateType<ReturnType<typeof rootReducer>>
