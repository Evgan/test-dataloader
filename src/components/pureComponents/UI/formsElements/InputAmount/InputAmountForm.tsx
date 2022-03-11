import React from 'react'

import {InputAmount} from '../../index'
import {FieldInputProps, FieldMetaState} from 'react-final-form'
import {UI_CONSTANT} from '../../constants'

interface IValidationRules {
    error?: string,
    validate?: () => {}
}

declare interface IInputForm {
    onChange?: any,
    input?: FieldInputProps<any>,
    meta?: FieldMetaState<any>,
    label?: string,
    className?: string,
    tooltip?: string,
    validationRules?:IValidationRules,
    disabled?: boolean,
    size?: keyof typeof UI_CONSTANT.INPUT_SIZES
}

const InputAmountForm: React.FC<IInputForm> = ({
    onChange: parentChangeHandler,
    input: { value, onChange, onFocus, onBlur, name } = {},
    meta: { error, touched, valid, dirty } = {},
    label= null,
    className= '',
    validationRules = [],
    disabled = false,
    size,
    tooltip
}) => {

    const onChangeInput = (e:any) => {
        if (parentChangeHandler) parentChangeHandler(e)
        if (onChange) onChange(e)
    }

    return (
        <div className={className}>
            <InputAmount
                name={name}
                value={value.toString()}
                label={label}
                onChange={onChangeInput}
                onFocus={onFocus}
                onBlur={onBlur}
                error={(touched && error) || ''}
                /*success={dirty && valid}*/
                validationRules={validationRules}
                disabled={disabled}
                size={size}
                tooltip={tooltip}
            />
        </div>
    )
}

export default InputAmountForm
