import React from 'react'
import {Field} from 'react-final-form'

export interface ICheckboxField<FormKeysType> {
    name: FormKeysType,
    label?: string,
    labelCustom?: string,
    component: React.FC<any>,
    disabled?: boolean,
    key?: string,
    className?: string
    tooltip?: string
}

function CheckboxField<FormKeysType extends string>(
    {name, label, labelCustom, component, disabled, key, className, tooltip}:ICheckboxField<FormKeysType>
) {
    return(
        <Field
            key={key}
            name={name}
            component={component}
            label={label}
            labelCustom={labelCustom}
            disabled={disabled}
            className={className}
            tooltip={tooltip}
        />
    )
}

export default CheckboxField
