import React, {useEffect, useState} from 'react'
import cx from 'classnames'
import {useHistory} from 'react-router-dom'

import {Typography} from '../../pureComponents/UI'
import {UI_CONSTANT} from '../../pureComponents/UI/constants'

import s from './BreadCrumbs.module.scss'
import {Base, LinkNative} from '../../pureComponents/UI/icons'
import {getBreadCrumbs} from '../../../helpers/mainMenu'

const BreadCrumbs = () => {
    const [breadcrumb, setBreadcrumb] = useState<string>('')
    const history = useHistory();

    useEffect(() => {
        const pathname = history?.location?.pathname;
        setBreadcrumb(getBreadCrumbs(pathname))
    },[history?.location?.pathname])

    return (
        <div className={s.container}>
            <div className={s.flex}>
                <Base className={s.translate50}/>
                <Typography
                    className={cx(s.translate50, s.margin)}
                    variant={UI_CONSTANT.TYPOGRAPHY_VARIANTS.h2}
                >
                    RT.DataLoader
                </Typography>
            </div>
            {breadcrumb && (
                <div className={s.flex}>
                    <LinkNative
                        className={cx(s.translate50, s.margin)}
                        fill='rgba(181,183,192,1)'
                    />
                    <Typography
                        className={cx(s.translate50, s.breadcrumb, s.margin)}
                        color={UI_CONSTANT.TYPOGRAPHY_COLORS.primary2}
                        variant={UI_CONSTANT.TYPOGRAPHY_VARIANTS.h4}
                    >
                        {breadcrumb}
                    </Typography>
                </div>
            )}
        </div>
    )
}

export default BreadCrumbs
