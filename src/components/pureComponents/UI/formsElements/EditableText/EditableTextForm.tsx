import React from 'react'

import {EditableText} from '../../index'
import {FieldInputProps, FieldMetaState} from 'react-final-form'
import {Edit, OkMonochrome} from '../../icons'

import s from './EditableText.module.scss'

export interface IValidationRule {
    error?: string,
    validate: (inputValue: string) => boolean,
}

declare interface IEditableTextForm {
    onChange?: any,
    input?: FieldInputProps<any>,
    meta?: FieldMetaState<any>,
    className?: string,
    validationRules?: IValidationRule[],
    disabled?: boolean
}

const EditableTextForm: React.FC<IEditableTextForm> = ({
    onChange: parentChangeHandler,
    input: { value, onChange, onFocus, onBlur, name } = {},
    meta: { error, touched, valid, dirty } = {},
    className= '',
    validationRules = [],
    disabled
}) => {

    const onSaveInput = (e:any) => {
        if (parentChangeHandler) parentChangeHandler(e)
        if (onChange) onChange(e)
    }
    return (
        <div className={className}>
            <EditableText
                name={name}
                value={value.toString()}
                onFocus={onFocus}
                onBlur={onBlur}
                error={(touched && error) || ''}
                validationRules={validationRules}
                onSave={onSaveInput}
                iconEdit={<div className={s.icon}><div><Edit size={17} fill={'#0042ed'} /></div></div>}
                iconSave={<OkMonochrome fill={'#0042ed'}/>}
                disabled={disabled}
            />
        </div>
    )
}

export default EditableTextForm
