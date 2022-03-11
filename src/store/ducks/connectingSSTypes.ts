import {IAction} from "../../helpers/CommonTypes"
import {ActionKeys, initialState} from "./connectingSS"

/**
 *  INIT
 */

export type InitSuccessResType = {
    data: object[]
}

export interface IInit extends IAction<ActionKeys.INIT, string> {}
export interface IInitSuccess extends IAction<ActionKeys.INIT_SUCCESS, InitSuccessResType> {}

/**
 *  DESTROY
 */
export interface IDestroy extends IAction<ActionKeys.DESTROY, string> {}

/**
 *  STATE & ACTIONS TYPES
 */

export type StateType = typeof initialState
export type ActionsType =
    IInit
    | IInitSuccess
    | IDestroy
