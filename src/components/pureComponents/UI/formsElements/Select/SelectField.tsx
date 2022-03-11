import React from 'react'
import {Field} from 'react-final-form'
import {ISelectMenuItem} from '@design-system-rt/rtk-ui-kit/components/Select/types'

function SelectField<FormKeysType extends string>(
    name: FormKeysType,
    label: string,
    component: React.FC<any>,
    options: ISelectMenuItem[],
    disabled?: boolean
) {
    return(
        <Field
            name={name}
            label={label}
            component={component}
            options={options}
            disabled={disabled}
        />
    )
}

export default SelectField
