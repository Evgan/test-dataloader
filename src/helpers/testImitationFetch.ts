const client  = (isSuccess: boolean, data:object) => (
    new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (isSuccess) {
                    resolve(data || 'УСПЕХ');
                } else {
                    reject(new Error('ОШИБКА'));
                }
            }, 1000);
        }
    )
);

export const ImitationApiCAll = function (isSuccess: boolean, resData?:object) {
    const onSuccess = function (response: any) {
        return response
    }

    const onError = function (error: any) {
        return Promise.reject(error)
    }

    return client(isSuccess, resData).then(onSuccess)
        .catch(onError)
}
