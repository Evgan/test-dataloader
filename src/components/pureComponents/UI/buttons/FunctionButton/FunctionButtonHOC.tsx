import React from 'react'
import {FunctionButton} from '@design-system-rt/rtk-ui-kit'
import {IFunctionButtonProps} from '@design-system-rt/rtk-ui-kit/components/Button/FunctionButton/types'

const FunctionButtonHoc:React.FC<IFunctionButtonProps> = (props) => (
    <FunctionButton {...props} />
)

export default FunctionButtonHoc
