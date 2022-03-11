import React from 'react'
import {Field} from 'react-final-form'
import {UI_CONSTANT} from '../../constants'

export interface IInputField<FormKeysType> {
    name: FormKeysType,
    label?: string,
    component: React.FC<any>,
    type?: string,
    disabled?: boolean,
    key?: string,
    className?: string,
    shape?: keyof typeof UI_CONSTANT.SHAPES,
    size?: keyof typeof UI_CONSTANT.INPUT_SIZES,
    tooltip?: string,
}


function InputField<FormKeysType extends string>(
    {
        name,
        label,
        component,
        type,
        disabled,
        key,
        className,
        shape,
        size,
        tooltip
    }:IInputField<FormKeysType>
) {
    return(
        <Field
            key={key}
            name={name}
            component={component}
            label={label}
            type={type}
            disabled={disabled}
            className={className}
            shape={shape}
            size={size}
            tooltip={tooltip}
        />
    )
}

export default InputField
