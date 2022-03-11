import React from 'react'
import {useHistory} from 'react-router-dom'

import s from './GroupMenu..module.scss'
import {FunctionButton, Typography} from '../../../pureComponents/UI'
import KeyHelper from '../../../../helpers/KeyHelper'
import {menuItemType} from '../../../../helpers/mainMenu'

declare type GroupItemsType = {
    value: string,
    url: string
}

declare interface IGroupMenu  {
    title:String,
    icon: React.ReactElement,
    groupItems:menuItemType[]
}


const GroupMenu = ({title, icon ,groupItems}:IGroupMenu) => {
    const history = useHistory();
    const handlerOnClick = (url: string) => {
        console.log(' > url = ', url)
        history.push(url)
    }
    return (
        <div className={s.groupMenu}>
            <div className={s.title}>
                <div className={s.center}>
                    {icon}
                    <Typography variant={'h3'}>
                        {title}
                    </Typography>
                </div>
            </div>
            <div className={s.submenu}>
                {groupItems.map((item: menuItemType) =>
                    <FunctionButton
                        key={KeyHelper()}
                        onClick={() => handlerOnClick(item.url)}
                    >
                        {item.title}
                    </FunctionButton>
                )}
            </div>
        </div>
    )
}

export default GroupMenu
