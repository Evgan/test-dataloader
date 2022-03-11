import React from 'react'
import {Select} from '@design-system-rt/rtk-ui-kit'
import {ISelectProps} from '@design-system-rt/rtk-ui-kit/components/Select/types'
import {UI_STYLE_CONFIG} from '../constants'

const SelectHOC:React.FC<ISelectProps> = (props) => (
    <Select
        size={UI_STYLE_CONFIG.inputSize}
        {...props}
    />
)

export default SelectHOC
