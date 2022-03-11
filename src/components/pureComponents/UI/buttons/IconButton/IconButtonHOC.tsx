import React from 'react'
import {IconButton} from '@design-system-rt/rtk-ui-kit'
import {IIconButtonProps} from '@design-system-rt/rtk-ui-kit/components/Button/IconButton/types'
import {UI_STYLE_CONFIG} from '../../constants'

const IconButtonHOC:React.FC<IIconButtonProps> = ({
  color = UI_STYLE_CONFIG.color,
  shape = UI_STYLE_CONFIG.shape,
  size = UI_STYLE_CONFIG.buttonSize,
  view = UI_STYLE_CONFIG.buttonView,
  ...rest
}) => (
    <IconButton
        color={color}
        shape={shape}
        size={size}
        view={view}
        {...rest}
    />
)

export default IconButtonHOC
