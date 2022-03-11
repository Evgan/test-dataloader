import React from 'react'
import {Switch} from '@design-system-rt/rtk-ui-kit'
import {ISwitchProps} from '@design-system-rt/rtk-ui-kit/components/Switch/types'

const SwitchHOC:React.FC<ISwitchProps> = (props) => (
    <Switch
        {...props}
    />
)

export default SwitchHOC
