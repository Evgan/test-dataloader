import React from 'react'
import {useDispatch} from 'react-redux'

import {Typography} from '../pureComponents/UI'
import {UI_CONSTANT, UI_STYLE_CONFIG} from '../pureComponents/UI/constants'
import LoginForm from './LoginForm/LoginForm'
import {ActionKeys} from '../../store/ducks/auth'
import {ISingIn, SignInFormDataType} from '../../store/ducks/authTypes'
import {useHistory} from 'react-router-dom'
import s from './Login.module.scss'

const Login = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const handlerSignIn = (formData: SignInFormDataType) => {
        const search:string = history?.location?.search
        const redirectPath = search?.replace('?', '') || '/'
        const actionData: ISingIn = {
            type: ActionKeys.SIGN_IN,
            payload: {formData, redirectPath}
        }
        dispatch(actionData)
    }
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <Typography
                        color={UI_STYLE_CONFIG.textColorMine}
                        tag='p'
                        variant={UI_CONSTANT.TYPOGRAPHY_VARIANTS.h1}
                        className={s.title}
                    >
                        RT.DataLoader
                    </Typography>
                    <LoginForm
                        handlerSignIn={handlerSignIn}
                    />
                </div>
            </div>
        </>
    )
}

export default Login
