import {AddHostFormDataType} from '../../../../store/ducks/hostsTypes'
import {KeysToOptionType} from '../../../../helpers/CommonTypes'
import {AddHostPayloadTypeKeys} from './AddHostForm'

export default function ({
    bin_path,
    host,
    host_cd,
    host_desc
}: AddHostFormDataType) {

    const errors: KeysToOptionType<AddHostPayloadTypeKeys, string> = {}
    if (!bin_path) {
        errors.bin_path = 'Введите bin_path'
    }
    if (!host) {
        errors.host = 'Введите host'
    }
    if (!host_cd) {
        errors.host_cd = 'Выберите host_cd'
    }
    if (!host_desc) {
        errors.host_desc = 'Выберите host_desc'
    }

    return errors
}
