import {IAction} from "../../helpers/CommonTypes"
import {ActionKeys, initialState} from "./hosts"

/**
 *  INIT
 */
export type InitSuccessResType = {
    data: object[]
}
export interface IInit extends IAction<ActionKeys.INIT, string> {}
export interface IInitSuccess extends IAction<ActionKeys.INIT_SUCCESS, InitSuccessResType> {}

/**
 *  ADD_HOST
 */
export type AddHostFormDataType = {
    host_cd?:string,
    host_desc?:string,
    host?:string,
    bin_path?:string
}
export type AddHostSuccessResType = {
    host_id:number,
    host_cd:string,
    host_desc:string,
    host:string,
    bin_path:string
}
export interface IAddHost extends IAction<ActionKeys.ADD_HOST, AddHostFormDataType> {}
export interface IAddHostSuccess extends IAction<ActionKeys.ADD_HOST_SUCCESS, AddHostSuccessResType> {}

/**
 *  DESTROY
 */
export interface IDestroy extends IAction<ActionKeys.DESTROY, string> {}

/**
 *  DESTROY_IS_FETCHING
 */
export interface IDestroyIsFetching extends IAction<ActionKeys.DESTROY_IS_FETCHING, string> {}

/**
 *  STATE & ACTIONS TYPES
 */

export type StateType = typeof initialState
export type ActionsType =
      IInit
    | IInitSuccess
    | IDestroy
    | IAddHost
    | IAddHostSuccess
    | IDestroyIsFetching
