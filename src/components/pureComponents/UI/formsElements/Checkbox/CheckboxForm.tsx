import React from 'react'
import {FieldInputProps, FieldMetaState} from 'react-final-form'
import {Checkbox, Tooltip, Typography} from '../../index'
import {InformationMonochrome} from '../../icons'
import {UI_CONSTANT} from '../../constants'

const cx = require('classnames')
import s from './CheckboxForm.module.scss'

declare interface IValidationRules {
    error?: string,
    validate?: () => {}
}

declare interface ICheckboxForm {
    onChange?: any,
    input?: FieldInputProps<any>,
    meta?: FieldMetaState<any>,
    label?: string,
    labelCustom?: string,
    className?: string,
    validationRules?:IValidationRules,
    disabled?: boolean,
    tooltip?: string
}
const CheckboxForm:React.FC<ICheckboxForm> = ({
  input: { value, onChange, onFocus, onBlur, name } = {},
  //meta: { error, touched, valid, dirty } = {},
  labelCustom,
    tooltip,
  ...other
}) => {
    const classes = cx(labelCustom && s.withCustomlabel)
    return (
        <div className={classes}>
            {tooltip && (
                <Tooltip
                    header=''
                    hideCloseButton
                    hintSide='bottom'
                    placement="right"
                    shape='rounded'
                    text={tooltip}
                    textAlign='left'
                    trigger='hover'
                >
                    <InformationMonochrome />
                </Tooltip>
            )}
            {labelCustom && (
                <Typography
                    variant={UI_CONSTANT.TYPOGRAPHY_VARIANTS.h4}
                    tag='span'
                >
                    {labelCustom}
                </Typography>
            )}
            <Checkbox
                {...other}
                checked={!!value}
                onChange={onChange}
                //error={(touched && error) || ''}
                //success={dirty && valid}
            />
        </div>
    )
}

export default CheckboxForm
