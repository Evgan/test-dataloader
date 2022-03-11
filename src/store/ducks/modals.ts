import {Nullable} from "../../helpers/CommonTypes"
import {ModalType} from "./modalsTypes"
import {ActionsType, StateType} from "./modalsTypes"

export enum MODALS_ID {
    ADD_HOST = 'ADD_HOST',
}

export enum ActionKeys {
    SHOW_MODAL ='SHOW_MODAL_modal',
    CLOSE_MODAL = 'CLOSE_MODAL_modal',
    SWITCH_FETCHING = 'SWITCH_FETCHING_modal',
}

export const initialState = {
    modalsList: [] as Nullable<Array<ModalType>>,
    data: null as Nullable<any>,
    isDisabled: false,
    nameClosedModal: null as Nullable<MODALS_ID>
}

export default function reducer(state: StateType = initialState, action: ActionsType): StateType {
    switch (action.type) {
        case ActionKeys.SHOW_MODAL: {
            const {
                name,
                withoutClose,
                data
            } = action.payload
            let isNewModal: boolean = true
            let allModals: Array<ModalType> = state.modalsList?.map(modal => {
                if (modal.name === name) {
                    modal.isOpen = true
                    isNewModal = false
                } else if (!withoutClose) {
                    modal.isOpen = false
                }
                return modal
            })
            if (isNewModal) {
                const newModal: ModalType = {
                    name,
                    isOpen: true
                }
                allModals = [
                    ...allModals,
                    newModal
                ]
            }
            return {
                ...state,
                nameClosedModal: null,
                data,
                modalsList: allModals
            }
        }
        case ActionKeys.CLOSE_MODAL: {
            const {
                name
            } = action.payload
            const allModals: Array<ModalType> = state.modalsList.map(modal => {
                if (modal.name === name) {
                    modal.isOpen = false
                }
                return modal
            })
            return {
                ...state,
                nameClosedModal: name,
                data: null,
                modalsList: allModals
            }
        }
        case ActionKeys.SWITCH_FETCHING: {
            return {
                ...state,
                isDisabled: !state.isDisabled
            }
        }
        default:
            return state
    }
}
