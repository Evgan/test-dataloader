import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import {useDispatch} from 'react-redux'
import cx from 'classnames'

import {useStateTypedSelector} from '../../hooks/useStateTypedSelector'
import {IconButton} from '../pureComponents/UI'
import {Error} from '../pureComponents/UI/icons'
import {ActionKeys, MODALS_ID} from '../../store/ducks/modals'
import {UI_STYLE_CONFIG} from '../pureComponents/UI/constants'
import {ICloseModal} from '../../store/ducks/modalsTypes'

import s from './ModalHOC.module.scss'

interface IModal {
    name: MODALS_ID
}

const ModalHOC:React.FC<IModal> = props => {
    const {
        name,
        children
    } = props
    const ref = useRef()
    const dispatch = useDispatch()
    const modalsReducer = useStateTypedSelector(state => state.modals)
    const {
        modalsList
    } = modalsReducer || {}
    const currentModal = modalsList?.find(modal => modal.name === name)
    const isOpen = currentModal?.isOpen
    const classes = cx(
        s.container
    )

    const handlerClose = () => {
        const actionData: ICloseModal = {
            type: ActionKeys.CLOSE_MODAL,
            payload: {
                name
            }
        }
        dispatch( actionData )
    }

    return (
        <>
            {isOpen && ReactDOM.createPortal(
                <div
                    className={classes}
                    ref={ref}
                >
                    <div
                        className={s.outside}
                        onClick={handlerClose}
                    />
                    <div className={s.center}>
                        <div className={s.content}>
                            {children}
                            <IconButton
                                className={s.close}
                                onClick={handlerClose}
                                color={UI_STYLE_CONFIG.color}
                                icon={<Error />}
                            />
                        </div>
                    </div>
                </div>,
                document.getElementById('ModalContainer')
            )}
        </>
    )
}

export default ModalHOC
