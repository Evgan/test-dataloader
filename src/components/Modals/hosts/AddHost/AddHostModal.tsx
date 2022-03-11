import React from 'react'
import {useDispatch} from 'react-redux'
import ModalHOC from '../../ModalHOC'
import {MODALS_ID} from '../../../../store/ducks/modals'
import AddHostForm from './AddHostForm'
import {AddHostFormDataType, IAddHost} from '../../../../store/ducks/hostsTypes'
import {ActionKeys} from '../../../../store/ducks/hosts'

const AddHostModal = () => {
    const dispatch = useDispatch()

    const handlerAddHost = (formData: AddHostFormDataType) => {
        const actionData: IAddHost = {
            type: ActionKeys.ADD_HOST,
            payload: formData
        }
        dispatch(actionData)
    }

    return (
        <ModalHOC name={MODALS_ID.ADD_HOST}>
            <AddHostForm
                handlerAddHost={handlerAddHost}
            />
        </ModalHOC>
    )
}

export default AddHostModal
