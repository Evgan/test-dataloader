import React from 'react'
import {Box} from '@design-system-rt/rtk-ui-kit'
import {IBox} from '@design-system-rt/rtk-ui-kit/components/Box/types'

const BoxHOC:React.FC<IBox> = (props) => (
    <Box {...props}>
        {props.children}
    </Box>
)

export default BoxHOC
