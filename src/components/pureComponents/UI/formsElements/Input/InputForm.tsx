import React, {useState, useEffect, ReactNode} from 'react'
import {FieldInputProps, FieldMetaState} from 'react-final-form'

import { Input } from '../../index'
import {TYPES_INPUT, UI_CONSTANT} from '../../constants'
import {
    PasswordShow,
    PasswordHide
} from '../../icons'

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
    validationRules?:IValidationRules,
    disabled?: boolean,
    shape?: keyof typeof UI_CONSTANT.SHAPES,
    size?: keyof typeof UI_CONSTANT.INPUT_SIZES,
    tooltip?: string
}

const InputForm: React.FC<IInputForm> = ({
    onChange: parentChangeHandler,
    input: { value, onChange, onFocus, onBlur, name, type } = {},
    meta: { error, touched, valid, dirty } = {},
    label= null,
    className= '',
    validationRules = [],
    disabled = false,
    shape,
    size,
    tooltip
}) => {
    const [showPass, setShowPass] = useState<boolean>(false)
    const [typeState, setTypeState] = useState<string>(type)
    const [icon, setIcon] = useState<ReactNode>()
    /*const onChangeInput = useCallback(
        e => {
            if (parentChangeHandler) parentChangeHandler(e)
            onChange(e)
        },
        [onChange, parentChangeHandler]
    )*/

    useEffect(() => {
        if (type === TYPES_INPUT.password) {
            setTypeState(showPass ? TYPES_INPUT.text : TYPES_INPUT.password)
            setIcon(showPass ? <PasswordShow /> : <PasswordHide />)
        }
    }, [type, showPass])

    const onChangeInput = (e:any) => {
        if (parentChangeHandler) parentChangeHandler(e)
        if (onChange) onChange(e)
    }
    return (
        <div className={className}>
            <Input
                type={typeState}
                name={name}
                value={value}
                label={label}
                onChange={onChangeInput}
                onFocus={onFocus}
                onBlur={onBlur}
                error={(touched && error) || ''}
                /*success={dirty && valid}*/
                validationRules={validationRules}
                disabled={disabled}
                shape={shape}
                size={size}
                tooltip={tooltip}
                icon={icon}
                onIconClick={() => setShowPass(!showPass)}
            />
        </div>
    )
}

export default InputForm
