import React from 'react'
import {Field} from 'react-final-form'

export interface IEditableTextField<FormKeysType> {
    name: FormKeysType,
    component: React.FC<any>,
    type?: string,
    key?: string,
    className?: string,
    disabled?: boolean,
}


function EditableTextField<FormKeysType extends string>(
    {
        name,
        component,
        type,
        key,
        className,
        disabled
    }:IEditableTextField<FormKeysType>
) {
    return(
        <Field
            key={key}
            name={name}
            component={component}
            type={type}
            className={className}
            disabled={disabled}
        />
    )
}

export default EditableTextField
