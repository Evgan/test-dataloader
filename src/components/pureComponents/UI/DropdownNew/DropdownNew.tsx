import React, {ReactElement, cloneElement, useState, useRef} from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import KeyHelper from '../../../../helpers/KeyHelper'

import s from './DropdownNew.module.scss'

declare interface IDropdownNew {
    overlay:any
}

const DropdownNew: React.FC<IDropdownNew> = (props) => {

    const ref= useRef()
    const [isOpen, setIsOpen] = useState(false)

    const handlerOutsideClick = () => {
        setIsOpen(!isOpen)
    }

    const handlerClickOverlay = () => {
        setIsOpen(!isOpen)
    }
    const handlerClickOnRef = () => {
        setIsOpen(false)
    }

    useOutsideClick(ref, handlerOutsideClick)

    const overlay:ReactElement = cloneElement(
        props.overlay,
        {
            onClick: handlerClickOverlay
        }
    )

    return (
        <div className={s.container}>
            <div className={s.overlay}>
                {overlay}
            </div>
            {isOpen &&
                <div
                    className={s.down}
                    key={KeyHelper()}
                    ref={ref}
                    onClick={handlerClickOnRef}
                >
                    {props.children}
                </div>
            }
        </div>
    )
}

export default DropdownNew
