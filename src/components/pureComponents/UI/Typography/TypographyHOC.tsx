import React from 'react'
import {Typography} from '@design-system-rt/rtk-ui-kit'
import {ITypographyProps} from '@design-system-rt/rtk-ui-kit/components/Typography/types'

const TypographyHOC:React.FC<ITypographyProps> = (props) => (
    <Typography {...props} >
        {props.children}
    </Typography>
)

export default TypographyHOC
