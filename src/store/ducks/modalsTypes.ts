import {IAction} from "../../helpers/CommonTypes"
import {
    ActionKeys,
    MODALS_ID
} from "./modals"

export type ModalType = {
    name: MODALS_ID,
    isOpen: boolean
}

export type ShowModalPayloadType = {
    name: MODALS_ID,
    withoutClose?: boolean
    data?: object
}
export type CloseModalPayloadType = {
    name: MODALS_ID,
}

/**
 *
 */

export interface IShowModal extends IAction<ActionKeys.SHOW_MODAL, ShowModalPayloadType> {}
export interface ICloseModal extends IAction<ActionKeys.CLOSE_MODAL, CloseModalPayloadType> {}
export interface ISwitchFetchingModal extends IAction<ActionKeys.SWITCH_FETCHING, {}> {}

/**
 *  STATE & ACTIONS TYPES
 */

export type StateType = {
    modalsList: Array<ModalType>
    data: any
    isDisabled: boolean,
    nameClosedModal: MODALS_ID
}
//export type StateType = typeof initialState
export type ActionsType = IShowModal | ICloseModal | ISwitchFetchingModal
