import {ActionKeys, initialState} from "./auth"
import {IAction} from "../../helpers/CommonTypes"

/**
 *  SIGN_IN TYPES
 */
export type SignInFormDataType = {
    username?: string
    password?: string
}
export type SignInPayloadType = {
    formData: SignInFormDataType
    redirectPath?: string
}
export type SignInSuccessResType = {
    token: string
}
export interface ISingIn extends IAction<ActionKeys.SIGN_IN, SignInPayloadType> {}
export interface ISingInSuccess extends IAction<ActionKeys.SIGN_IN_SUCCESS, SignInSuccessResType> {}
export interface ISingInFail extends IAction<ActionKeys.SIGN_IN_FAIL, string> {}


/**
 *  STATE & ACTIONS TYPES
 */

export type StateType = typeof initialState
export type ActionsType = ISingIn | ISingInSuccess | ISingInFail
