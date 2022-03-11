import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-final-form'

import {
    ButtonWithPreloader,
    InputForm,
    InputField
} from '../../pureComponents/UI/index'
import {UI_CONSTANT, TYPES_INPUT} from '../../pureComponents/UI/constants'
import {SignInFormDataType, StateType as StateAuthType} from '../../../store/ducks/authTypes'
import { Typography } from '../../pureComponents/UI'
import validate from './validate'
import {RootStateType} from '../../../store/reducers'


import s from './LoginForm.module.scss'

export interface ILoginForm {
    authStore: StateAuthType,
    handlerSignIn: (formData: SignInFormDataType) => void
}

export type SignInFormDataTypeKeys = Extract<keyof SignInFormDataType, string>

const LoginForm: React.FC<ILoginForm> = props => {
    const {
        isFetching,
        isError,
        msgError
    } = props.authStore
    return (
        <Form
            // initialValues={{
            //     firstName: 'Dan'
            // }}
            onSubmit={values => {
                props.handlerSignIn(values)
            }}
            validate={values => validate(values)}
        >
            {({
                  handleSubmit,
                  pristine,
                  form,
                  submitting
              }) => {
                return(
                    <form
                        className={s.form}
                        onSubmit={handleSubmit}
                    >
                        <div className={s.indent}/>
                        {InputField<SignInFormDataTypeKeys>({
                            name: 'username',
                            label: 'Login',
                            component: InputForm,
                            type: TYPES_INPUT.text,
                            disabled: isFetching
                        })}
                        {InputField<SignInFormDataTypeKeys>({
                            name: 'password',
                            label: 'Password',
                            component: InputForm,
                            type: TYPES_INPUT.password,
                            disabled: isFetching
                        })}
                        {isError && (
                            <Typography
                                color={UI_CONSTANT.TYPOGRAPHY_COLORS.error}
                                tag='p'
                                variant={UI_CONSTANT.TYPOGRAPHY_VARIANTS.caption}
                                className={s.title}
                            >
                                {msgError}
                            </Typography>
                        )}
                        <ButtonWithPreloader
                            title='Log In'
                            showPreloader={isFetching}
                            disabled={isFetching}
                            preloaderColor='stock'
                            size={UI_CONSTANT.SIZES.medium}
                        />
                    </form>
                )
            }}
        </Form>
    )
}

type IAuthStore = {
    authStore: StateAuthType
}

const mapStateToProps = (store: RootStateType):IAuthStore => ({
    authStore: store.auth
})



export default connect(mapStateToProps, null)(LoginForm)
