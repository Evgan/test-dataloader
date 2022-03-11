import React, {useRef, useState} from 'react'
import {IDropdownMenuItem, IDropdownMenuProps} from '@design-system-rt/rtk-ui-kit/components/DropdownMenu/types'
import {DropdownMenu} from '@design-system-rt/rtk-ui-kit'
import KeyHelper from '../../../../helpers/KeyHelper'

const cx = require('classnames')
import s from './DropdownMenuHOC.module.scss'

export interface IDropdownMenuHOC extends IDropdownMenuProps {
    dropTo?: 'UP' | 'DOWN'
}

const DropdownMenuHOC: React.FC<IDropdownMenuHOC> = ({
    children,
    dropTo,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref= useRef()
    const switchOpen = () => {
        console.log('eeeeeeeeeeee switchOpen()')
        setIsOpen(!isOpen)
    }
    const handlerSelect = (selected: IDropdownMenuItem['key']) => {
        console.log('eeeeeeeeeeee selected:')
        console.log(selected)
    }
    console.log(' > isOpen = ', isOpen)
    return (
        <div className={cx(s.container, dropTo === 'UP' && s.up)}>
            <div
                key={KeyHelper()}
                ref={ref}
                onClick={switchOpen}
            >
                {children}
            </div>
            {isOpen && (
                <div className={cx(s.menu, dropTo === 'UP' && s.menuUp)}>
                    <DropdownMenu
                        {...rest}
                        onSelect={handlerSelect}
                        onClose={switchOpen}
                    />
                </div>
            )}
        </div>
    )
}

export default DropdownMenuHOC
