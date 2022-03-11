import React from 'react'
import {Checkbox} from '@design-system-rt/rtk-ui-kit'
import {ICheckboxProps} from '@design-system-rt/rtk-ui-kit/components/Checkbox/Checkbox/types'

const CheckboxHOC:React.FC<ICheckboxProps> = props => (
    <Checkbox {...props} />
)

export default CheckboxHOC
