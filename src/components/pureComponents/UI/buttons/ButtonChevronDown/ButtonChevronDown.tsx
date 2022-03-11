import React, {MouseEvent} from 'react'
import {ChevronDown16} from '../../icons'
import {UI_CONSTANT, UI_STYLE_CONFIG} from '../../constants'
import {IconButton} from '../../index'

import s from './ButtonChevronDown.module.scss'

interface IButtonChevronDown {
    handlerOnClick (event: MouseEvent<HTMLButtonElement>): void
    classNames?: string
}

const ButtonChevronDown:React.FC<IButtonChevronDown> = (props) => (
    <div className={props.classNames}>
        <IconButton
            icon={<ChevronDown16 />}
            color={UI_STYLE_CONFIG.color}
            size={UI_STYLE_CONFIG.buttonSize}
            view={UI_CONSTANT.BUTTON_VIEWS.ghost}
            className={s.button}
            onClick={props.handlerOnClick}
        />
    </div>
)

export default ButtonChevronDown
