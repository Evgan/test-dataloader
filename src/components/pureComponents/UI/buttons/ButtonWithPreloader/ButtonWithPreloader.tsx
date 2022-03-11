import React from 'react'
import cx from 'classnames'
import {IButtonProps} from '@design-system-rt/rtk-ui-kit/components/Button/Button/types'

import Preloader from '../../../Preloader/Preloader'
import { Button } from '../../index'

import s from './Preloader.module.scss'

interface IButtonWithPreloader extends IButtonProps {
    title?: string,
    showPreloader?: boolean,
    success?: boolean,
    preloaderColor?: string,
    classNames?: string,
}

const ButtonWithPreloader: React.FC<IButtonWithPreloader> = ({
    title = '',
    showPreloader = false,
    preloaderColor = 'white',
    success = false,
    type= 'submit',
    disabled = false,
    classNames = '',
    onClick =  () => {},
    ...rest
}) => (
    <Button
        type={type}
        classNames={cx(classNames, showPreloader && s.eventNone)}
        disabled={disabled}
        onClick={onClick}
        {...rest}
    >
        <div className={s.withPreloader}>
            {!showPreloader && !success && title}

            {showPreloader && (
                <Preloader />
            )}

            {!showPreloader && success && (
                <div className={s.successIcon} />
            )}

        </div>
    </Button>
)

export default ButtonWithPreloader
