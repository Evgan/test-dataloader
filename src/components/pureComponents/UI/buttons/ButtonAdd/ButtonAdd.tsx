import React, {MouseEvent} from 'react'
import {AddSmall16} from '../../icons'
import {UI_CONSTANT, UI_STYLE_CONFIG} from '../../constants'
import {IconButton} from '../../index'

import s from './ButtonAdd.module.scss'
interface IButtonAdd {
    handlerOnClick (event: MouseEvent<HTMLButtonElement>): void
    classNames?: string
}
const ButtonAdd:React.FC<IButtonAdd> = (props) => (
    <div className={props.classNames}>
        <IconButton
            icon={<AddSmall16 />}
            color={UI_STYLE_CONFIG.color}
            size={UI_CONSTANT.SIZES.small}
            className={s.button}
            onClick={props.handlerOnClick}
        />
    </div>
)

export default ButtonAdd
