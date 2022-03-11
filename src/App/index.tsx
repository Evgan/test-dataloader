import React from 'react'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    Switch,
    Route,
} from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit'
import '@design-system-rt/rtk-fonts'

import MainRouter from './MainRouter'
import Login from '../components/auth/Login'
import rootReducer from '../store/reducers'
import saga from '../store/redux/saga'
import NotificationsProvider from '../services/Notifications/NotificationsProvider'

const history:any = createHistory()
const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(routerMiddleware(history), sagaMiddleware)
export const store = createStore(rootReducer(history), composeWithDevTools(enhancer))

sagaMiddleware.run(saga)

export function App() {
    return <ThemeProvider themeName='light'>
        <NotificationsProvider>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <>
                            <Route
                                path='/login'
                                component={Login}
                            />
                            <Route
                                path='/'
                                component={MainRouter}
                            />
                        </>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </NotificationsProvider>
    </ThemeProvider>
}
