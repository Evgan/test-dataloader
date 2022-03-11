import React, {useCallback} from 'react'
import {Edit, MenuKebab} from '../../UI/icons'
import {IconButton, DropdownNew} from '../../UI'
import {UI_STYLE_CONFIG} from '../../UI/constants'

import s from './RowMenu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import {Trash} from '@design-system-rt/rtk-ui-kit'

declare interface IRowMenu {
    idRow: string,
    callbackEdit?(idRow:string): void
    callbackTrash?(idRow:string): void
}

const RowMenu = ({idRow, callbackEdit, callbackTrash}:IRowMenu) => {

    const handlerEdit = useCallback(() => {
        callbackEdit(idRow)
    }, [])
    const handlerTrash = useCallback(() => {
        callbackTrash(idRow)
    }, [])

    return (
        <div className={s.rowMenu}>
            <DropdownNew
                overlay={
                    <IconButton
                        icon={<MenuKebab/>}
                        view={UI_STYLE_CONFIG.iconButtonView}
                        color={UI_STYLE_CONFIG.color}
                    />
                }
            >
                <div className={s.menu}>
                    {callbackEdit && (
                        <MenuItem
                            title='Редактировать'
                            icon={<Edit />}
                            callBack={handlerEdit}
                        />
                    )}
                    {callbackTrash && (
                        <MenuItem
                            title='Удалить'
                            icon={<Trash />}
                            callBack={handlerTrash}
                        />
                    )}
                </div>
            </DropdownNew>
        </div>
    )
}

export default RowMenu
