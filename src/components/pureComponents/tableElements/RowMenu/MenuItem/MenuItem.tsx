import React from 'react'

import {IconButton} from '../../../UI'
import s from './MenuItem.module.scss'
import {UI_STYLE_CONFIG} from '../../../UI/constants'

declare interface IMenuItem {
    icon: React.ReactNode,
    title: string,
    callBack(): void
}

const MenuItem = ({icon, title, callBack}:IMenuItem) => {
    return (
        <IconButton
            icon={icon}
            view={UI_STYLE_CONFIG.iconButtonView}
            color={UI_STYLE_CONFIG.color}
            title={title}
            className={s.menuItem}
            onClick={callBack}
        />
    )
}

export default MenuItem
