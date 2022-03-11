import {
    THEMES,
    BASE_COLORS,
    SHAPES,
    BUTTON_VIEWS,
    SIZES,
    INPUT_SIZES,
    TYPOGRAPHY_COLORS,
    TYPOGRAPHY_VARIANTS,
    TEXT_HORIZONTAL_POSITIONS,
    CHECKBOX_SIZES,
    SYSTEM_COLORS
} from '@design-system-rt/rtk-ui-kit/constants/components'
import {TAB_SIZES} from '@design-system-rt/rtk-ui-kit/components/TabsClassic/constants'

const ICON_FILL = {
    primary2: 'rgba(255,79,18,1)',
    primary1: 'rgba(119,0,255,1)',
    error: SYSTEM_COLORS.error,
    warning: SYSTEM_COLORS.warning,
    info: SYSTEM_COLORS.info,
    success: SYSTEM_COLORS.success
}

export const UI_CONSTANT = {
    THEMES,
    BASE_COLORS,
    SHAPES,
    BUTTON_VIEWS,
    SIZES,
    INPUT_SIZES,
    TYPOGRAPHY_COLORS,
    TYPOGRAPHY_VARIANTS,
    TEXT_HORIZONTAL_POSITIONS,
    CHECKBOX_SIZES,
    ICON_FILL
}

// Default настройка стиля отображения компонентов из библиотеки @design-system-rt/rtk-ui-kit
export const UI_STYLE_CONFIG = {
    textColorMine: UI_CONSTANT.TYPOGRAPHY_COLORS.main,
    color: BASE_COLORS.primary2,
    shape: SHAPES.geometric,
    view: BUTTON_VIEWS.primary,
    buttonSize: SIZES.small,
    buttonView: BUTTON_VIEWS.primary,
    iconButtonView: BUTTON_VIEWS.ghost,
    inputSize: INPUT_SIZES.small,
    tabSize: TAB_SIZES.small
}



export enum TYPES_INPUT {
    text = 'text',
    password = 'password'
}

export enum OPTIONS_FILL_ICON_DS_RT {
    default = 'rgb(16, 24, 40)',
    success = 'rgba(0,211,89,1)',
    info = 'rgba(0,66,237,1)',
    warning = 'rgba(255,182,8,1)',
    error = 'rgba(255,12,12,1)'
}




