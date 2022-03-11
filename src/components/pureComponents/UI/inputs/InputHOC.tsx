import React from 'react'
import {IBaseInputProps} from '@design-system-rt/rtk-ui-kit/components/Base/BaseInput/types'
import { Input } from '@design-system-rt/rtk-ui-kit'

import { UI_STYLE_CONFIG } from '../constants'
import {Tooltip} from '../index'
import {InformationMonochrome} from '../icons'

const cx = require('classnames')
import s from './Input.module.scss'

export interface IInputHOC extends IBaseInputProps{
    validationRules?: any
    classNameContainer?: string
    tooltip?: string
}

const InputHOC: React.FC<IInputHOC> = ({
    type = 'text',
    icon = null,
    value = '',
    color = UI_STYLE_CONFIG.color,
    error = '',
    shape =  UI_STYLE_CONFIG.shape,
    label = null,
    placeholder,
    onBlur = () => {},
    onFocus = () => {},
    onChange = () => {},
    disabled = false,
    className = '',
    onIconClick = () => {},
    validationRules = [],
    classNameContainer = '',
    clearable= false,
    size= UI_STYLE_CONFIG.inputSize,
    tooltip
}) => {
    const classes = cx(s.inputWrapper, className)
    return (
        <div className={cx(s.container, classNameContainer)}>
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
                    className={s.tooltip}
                >
                    <InformationMonochrome />
                </Tooltip>
            )}
            <div className={s.absolute}>
                <Input
                    type={type}
                    icon={icon}
                    color={color}
                    label={label}
                    placeholder={placeholder}
                    shape={shape}
                    value={value}
                    error={error}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={disabled}
                    onChange={onChange}
                    className={classes}
                    onIconClick={onIconClick}
                    validationRules={validationRules}
                    clearable={clearable}
                    size={size}
                />
            </div>
        </div>
    )
}

export default InputHOC
