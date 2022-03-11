import React, {ReactElement} from 'react'
import {
    ToastNotificationsProvider,
} from '@design-system-rt/rtk-ui-kit'
import {NotificationsProviderEventSubscription} from './NotificationsProviderEventSubscription'

interface INotificationsProviderProps {
    children: ReactElement
}

const NotificationsProvider = (props: INotificationsProviderProps) =>{
    const {children} = props
    return (
        <ToastNotificationsProvider position={'topRight'}>
            <NotificationsProviderEventSubscription>
                {children}
            </NotificationsProviderEventSubscription>
        </ToastNotificationsProvider>
    )
}

export default NotificationsProvider
