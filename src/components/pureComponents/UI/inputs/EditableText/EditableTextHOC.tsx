import React from 'react'
import EditableText from '@design-system-rt/rtk-ui-kit/components/Input/EditableText/EditableText'
import {IEditableTextProps} from '@design-system-rt/rtk-ui-kit/components/Input/EditableText/types'

import s from './EditableTextHOC.module.scss'



export interface IEditableTextHOC extends IEditableTextProps {
    disabled: boolean
}

const EditableTextHOC = (props:IEditableTextHOC) => {
    const {
        name,
        disabled,
        value,
        ...rest
    } = props
    return (
        <>
            {!disabled && (
                <EditableText
                    {...rest}
                    value={value}
                />
            )}
            {disabled && (
                <div className={s.disabled}>{value}</div>
            )}
        </>
    )
}

export default EditableTextHOC
