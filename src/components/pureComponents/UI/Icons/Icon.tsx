import React, {CSSProperties } from 'react'

import { StyledSVG } from './styles'

export interface IIconProps {
    /** Задает цвет иконки */
    fill?: string;
    /** Задает второстепенный цвет иконки */
    secondaryColor?: string;
    /** Задает размер иконки
     * если <= 1 то задается в процентах (например 0,5 - 50%)
     *  @default 24 */
    size?: number;
    /** Задает высоту иконки */
    sizeH?: number;
    /** Задает viewBox
     *  @default '0 0 24 24' */
    viewBox?: string;
    /** Задает дополнительные классы для компонента */
    className?: string;
    /** Задает дополнительные стили для компонента */
    style?: CSSProperties;
}


const Icon: React.FC<IIconProps> = (props) => {

    const { size = 24, sizeH, viewBox = '0 0 24 24', children, ...restProps } = props
    const sizeStr = size <= 1 ? `${size * 100}%` : size

    return (
        <StyledSVG
            width={sizeStr}
            height={sizeH || sizeStr}
            viewBox={viewBox}
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            {...restProps}
        >
            {children}
        </StyledSVG>
    )
}

Icon.displayName = 'Icon'

export default Icon
