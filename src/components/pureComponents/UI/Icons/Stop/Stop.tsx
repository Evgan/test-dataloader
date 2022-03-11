import React from 'react'

import Icon from '../Icon'
import { IIconProps } from '../Icon'

const Stop = (props: IIconProps) => {
    return (
        <Icon {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                //d='M4,4 L20,4 L20,20 L4,20 L4,4 Z M6,6 L18,6 L18,18 L6,18 L6,6 Z M8,8 L16,8 L16,16 L8,16 L8,8 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z'
                d='M7,5 L17,5 C18.1045695,5 19,5.8954305 19,7 L19,17 C19,18.1045695 18.1045695,19 17,19 L7,19 C5.8954305,19 5,18.1045695 5,17 L5,7 C5,5.8954305 5.8954305,5 7,5 Z'
            />
        </Icon>
    )
}

Stop.displayName = 'Stop'

export default Stop
