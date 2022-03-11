import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-final-form'
import {
    AddHostFormDataType,
    StateType as AddHostStateType
} from '../../../../store/ducks/hostsTypes'
import {RootStateType} from '../../../../store/reducers'
import {ButtonWithPreloader, InputField, InputForm} from '../../../pureComponents/UI'
import {TYPES_INPUT} from '../../../pureComponents/UI/constants'
import s from './AddHostModal.module.scss'
import validate from './validate'

declare type AddHostStoreType = {
    addHostStore: AddHostStateType
}

declare interface IAddHostForm extends AddHostStoreType{
    handlerAddHost: (formData: AddHostFormDataType) => void
}

export type AddHostPayloadTypeKeys = Extract<keyof AddHostFormDataType, string>

const AddHostForm: React.FC<IAddHostForm> = ({
                         handlerAddHost,
                         addHostStore
}) => {
    const {isFetching} = addHostStore
    return (
        <Form
            onSubmit={values => {
                handlerAddHost(values)
            }}
            validate={values => validate(values)}
        >
            {({
                  handleSubmit
              }) => {
                return(
                    <form
                        className={s.form}
                        onSubmit={handleSubmit}
                    >
                        {InputField<AddHostPayloadTypeKeys>({
                            name: 'bin_path',
                            label: 'bin_path',
                            component: InputForm,
                            type: TYPES_INPUT.text,
                            disabled: isFetching
                        })}
                        {InputField<AddHostPayloadTypeKeys>({
                            name: 'host',
                            label: 'host',
                            component: InputForm,
                            type: TYPES_INPUT.text,
                            disabled: isFetching
                        })}
                        {InputField<AddHostPayloadTypeKeys>({
                            name: 'host_cd',
                            label: 'host_cd',
                            component: InputForm,
                            type: TYPES_INPUT.text,
                            disabled: isFetching
                        })}
                        {InputField<AddHostPayloadTypeKeys>({
                            name: 'host_desc',
                            label: 'host_desc',
                            component: InputForm,
                            type: TYPES_INPUT.text,
                            disabled: isFetching
                        })}
                        <ButtonWithPreloader
                            title='Создать'
                            showPreloader={isFetching}
                            disabled={isFetching}
                            preloaderColor='stock'
                        />
                    </form>
                )
            }}
        </Form>
    )
}

const mapStateToProps = (store: RootStateType): AddHostStoreType => ({
    addHostStore: store.hosts
})

export default connect(mapStateToProps, null)(AddHostForm)
