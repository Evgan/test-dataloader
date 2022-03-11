import React from 'react'
import {FunctionButton} from '../../UI'
import {AddSmall16} from '../../UI/icons'

import s from './Header.module.scss'

declare interface iHeader {
    callbackAddRow?(): void
}

const Header = ({callbackAddRow}:iHeader) =>
<div className={s.container}>
    {callbackAddRow && (
            <FunctionButton
                icon={<AddSmall16/>}
                onClick={callbackAddRow}
            >
                Создать
            </FunctionButton>
    )}
</div>

export default Header
