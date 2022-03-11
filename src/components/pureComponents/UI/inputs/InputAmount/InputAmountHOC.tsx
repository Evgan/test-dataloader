import React from 'react'
import {InputAmount} from '@design-system-rt/rtk-ui-kit'
import {UI_STYLE_CONFIG} from '../../constants'
import {IInputAmountProps} from '@design-system-rt/rtk-ui-kit/components/Input/InputAmount/types'
import {Tooltip} from '../../index'
import {InformationMonochrome} from '../../icons'
const cx = require('classnames')

import s from './InputAmount.module.scss'

export interface IInputAmountHOC extends IInputAmountProps{
    validationRules?: any
    classNameContainer?: string
    tooltip?: string
}

// const InputAmountHOC:React.FC<React.ForwardRefExoticComponent<IInputAmountProps & React.RefAttributes<HTMLInputElement>>> = props => (
//     <InputAmount {...props} />
// )
const InputAmountHOC: React.FC<IInputAmountHOC> = ({
                                           type = 'text',
                                           icon = null,
                                           value = '',
                                           color = UI_STYLE_CONFIG.color,
                                           error = '',
                                           shape =  UI_STYLE_CONFIG.shape,
                                           label = null,
                                           onBlur = () => {},
                                           onFocus = () => {},
                                           onChange = () => {},
                                           disabled = false,
                                           className = '',
                                           onIconClick = () => {},
                                           validationRules = [],
                                           classNameContainer = '',
                                           clearable= false,
                                           size = UI_STYLE_CONFIG.inputSize,
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
                <InputAmount
                    type={type}
                    icon={icon}
                    color='primary1'
                    label={label}
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

export default InputAmountHOC
