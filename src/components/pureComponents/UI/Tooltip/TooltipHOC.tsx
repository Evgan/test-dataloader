import React from 'react'
import {Tooltip} from '@design-system-rt/rtk-ui-kit'
import {ITooltipProps} from '@design-system-rt/rtk-ui-kit/components/Tooltip/types'

const TooltipHOC = (props:ITooltipProps) => <Tooltip {...props}/>

export default TooltipHOC
