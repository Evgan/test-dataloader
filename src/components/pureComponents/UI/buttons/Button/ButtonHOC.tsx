import React from 'react'
import cx from 'classnames'
import { Button } from '@design-system-rt/rtk-ui-kit'
import {IButtonProps} from '@design-system-rt/rtk-ui-kit/components/Button/Button/types'

import {
    UI_STYLE_CONFIG
} from '../../constants'

import s from './Button.module.scss'

interface IButtonHOC extends IButtonProps {
    classNames?: string
}

const ButtonHOC: React.FC<IButtonHOC> = ({
    type = 'button',
    color = UI_STYLE_CONFIG.color,
    shape = UI_STYLE_CONFIG.shape,
    size = UI_STYLE_CONFIG.buttonSize,
    view = UI_STYLE_CONFIG.buttonView,
    onClick =  () => {},
    disabled = false,
    children = null,
    classNames = '',
    ...rest
}) => (
    <Button
        icon=''
        color={color}
        shape={shape}
        size={size}
        view={view}
        onClick={onClick}
        iconPosition='left'
        disabled={disabled}
        type={type || 'button'}
        className={cx(s.btn, classNames)}
        {...rest}
    >
        {children}
    </Button>
)

export default ButtonHOC
