import {SignInFormDataType} from "../../../store/ducks/authTypes"
import {KeysToOptionType} from "../../../helpers/CommonTypes"
import {SignInFormDataTypeKeys} from "./LoginForm"

export default function ({ username, password }: SignInFormDataType) {

    const errors: KeysToOptionType<SignInFormDataTypeKeys, string> = {}

    if (!username) {
        errors.username = 'Введите имя пользователя'
    }
    if (!password) {
        errors.password = 'Введите пароль'
    }

    return errors
}
