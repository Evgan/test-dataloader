import React from 'react'

import s from './InfoMenu.module.scss'
import {IconButton} from '../../pureComponents/UI'
import {Chat, Help, SignOut} from '../../pureComponents/UI/icons'
import {UI_STYLE_CONFIG} from '../../pureComponents/UI/constants'

const InfoMenu = () => {
    return (
        <div className={s.container}>
            <IconButton view={UI_STYLE_CONFIG.iconButtonView} icon={<Chat/>}/>
            <IconButton view={UI_STYLE_CONFIG.iconButtonView} icon={<Help/>}/>
            <IconButton view={UI_STYLE_CONFIG.iconButtonView} icon={<SignOut/>}/>
        </div>
    )
}

export default InfoMenu
