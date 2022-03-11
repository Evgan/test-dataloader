import React from 'react'

import s from './Header.module.scss'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs'
import InfoMenu from './InfoMenu/InfoMenu'
import MainMenu from './MainMenu/MainMenu'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.center}>
                <div className={s.left}>
                    <MainMenu />
                    <BreadCrumbs/>
                </div>
                <div className={s.translate50}>
                    <InfoMenu/>
                </div>
            </div>
        </div>
    )
}

export default Header
