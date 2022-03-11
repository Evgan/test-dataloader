import {ReactElement, useEffect} from 'react'
import {useNotificationsStack} from '@design-system-rt/rtk-ui-kit'
import {notificationEventEmitter} from './notificationService'

export const NotificationsProviderEventSubscription = (props: {
    children: ReactElement
}) => {
    const notification = useNotificationsStack()
    useEffect(() => {
        const unbindError = notificationEventEmitter.on('error', (message) => {
            notification.addNotification({
                title: 'Ошибка',
                subtitle: message,
                type: 'error'
            })
        })
        const unbindWarning = notificationEventEmitter.on('warning', (message) => {
            notification.addNotification({
                title: 'Внимание',
                subtitle: message,
                type: 'warning'
            })
        })
        const unbindSuccess = notificationEventEmitter.on('success', (message) => {
            notification.addNotification({
                title: 'Успех',
                subtitle: message,
                type: 'success'
            })
        })
        return () => {
            unbindError()
            unbindWarning()
            unbindSuccess()
        }
    },[notification])

    return props.children
}
