import axios, {Method, ResponseType} from 'axios'
import Cookies from 'js-cookie'

/**
 * Create an Axios Client with defaults
 */

//const getToken = async () => await AsyncStorage.getItem("access-token")

const restApiBaseURL = process.env.REST_API_BASE_URL

if (!restApiBaseURL || restApiBaseURL.length === 0 || restApiBaseURL === '') {
    console.error('RestApiBaseURL is not exist')
}


const client = axios.create({
    baseURL: restApiBaseURL,
    // auth: { Authorization: 'Bearer ' + { getToken } }
})

/**
 * Request Wrapper with default success/error actions
 */
export const ApiCAll = function (method:Method, route:string, body?:any, needToken?:boolean, responseType?:ResponseType) {

    const onSuccess = function (response: any) {
        console.debug('Request Successful!', response)
        return response.data
    }

    const onError = function (error: any) {
        console.error('Request Failed:', error.config)

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:', error.response.status)
            console.error('Data:', error.response.data)
            console.error('Headers:', error.response.headers)

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message)
        }

        return Promise.reject(error.response || error.message)
    }

    let headers = {}

    if (needToken) {
        const token: string = Cookies.get('token')
        headers = {
            ...headers,
            Authorization: `Bearer_${token}`
        }
    }

    return client({
        method,
        url: route,
        data: body,
        headers,
        responseType
    }).then(onSuccess)
        .catch(onError)
}
