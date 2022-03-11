import React, {ReactElement, cloneElement, useState, useRef} from 'react'
import {IDropdownProps} from '@design-system-rt/rtk-ui-kit/components/Dropdown/types'
import {Dropdown} from '@design-system-rt/rtk-ui-kit'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import KeyHelper from '../../../../helpers/KeyHelper'


const DropdownHOC: React.FC<IDropdownProps> = (props) => {

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
        <div>
            <Dropdown
                {...props}
                isOpen={isOpen}
                overlay={overlay}

            >
                <div
                    key={KeyHelper()}
                    ref={ref}
                    onClick={handlerClickOnRef}
                >
                    {props.children}
                </div>
            </Dropdown>
        </div>
    )
}

export default DropdownHOC
