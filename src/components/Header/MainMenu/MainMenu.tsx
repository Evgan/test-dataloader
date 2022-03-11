import React from 'react'
import {UI_STYLE_CONFIG} from '../../pureComponents/UI/constants'
import {Box, Dropdown, IconButton} from '../../pureComponents/UI'
import {Equaliser, Menu, Synchronization} from '../../pureComponents/UI/icons'

import s from './MainMenu.module.scss'
import GroupMenu from './GroupMenu/GroupMenu'
import {menuPaths} from '../../../helpers/mainMenu'


const MainMenu = () =>
    <Dropdown
        className={s.dropdown}
        isFitContent
        shape={UI_STYLE_CONFIG.shape}
        overlay={
            <IconButton
                className={s.translate50}
                icon={<Menu/>}
                view={UI_STYLE_CONFIG.iconButtonView}
                color={UI_STYLE_CONFIG.color}
            />
        }
    >
        <Box spacing='m' className={s.downContainer}>
            <GroupMenu
                title='Настройки и подключения RTDL'
                icon={<Equaliser size={20} sizeH={15} viewBox='0 0 20 15' />}
                groupItems={menuPaths['setting-rtdl']}
            />
            <GroupMenu
                title='Регулярная выгрузка'
                icon={<Synchronization/>}
                groupItems={menuPaths['regular-upload']}
            />
        </Box>
    </Dropdown>

export default MainMenu
