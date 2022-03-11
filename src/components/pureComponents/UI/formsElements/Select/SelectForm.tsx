import React from 'react'
import {FieldInputProps, FieldMetaState} from 'react-final-form'
import {Select} from '../../index'

declare interface IValidationRules {
    error?: string,
    validate?: () => {}
}

declare interface ISelectForm {
    onChange?: any,
    input?: FieldInputProps<any>,
    meta?: FieldMetaState<any>,
    label?: string,
    className?: string,
    validationRules?:IValidationRules,
    disabled?: boolean
}

const SelectForm:React.FC<ISelectForm> = ({
    input: { value, onChange, onFocus, onBlur, name } = {},
    meta: { error, touched, valid, dirty } = {},
    ...other
}) => {
    return (
        <Select
            {...other}
            value={value || null}
            onChange={onChange}
            error={(touched && error) || ''}
            //success={dirty && valid}
        />
    )
}

export default SelectForm
