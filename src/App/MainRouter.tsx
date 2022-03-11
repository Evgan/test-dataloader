import React, {useEffect} from 'react'
import {Route, Switch, useHistory, withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
//import {useDispatch} from 'react-redux'

//import {ActionKeys} from '../store/ducks/hosts'
//import {IInit} from '../store/ducks/hostsTypes'
import Header from '../components/Header/Header'
import s from './MainRouter.module.scss'
import ModalContainer from '../components/Modals/ModalContainer'
import ConnectingSS from 'Pages/setting-rtdl/ConnectingSS/ConnectingSS'
import {menuPaths} from '../helpers/mainMenu'
import SetupUploadServer from 'Pages/setting-rtdl/SetupUploadServer/SetupUploadServer'

const MainRouter = () => {
    const token: string = Cookies.get('token')
    // const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (token) {
                // // Здесь инициируем загрузку необходимых данных после удачного логирования
                // const actionData: IInit = {
                //     type: ActionKeys.INIT
                // }
                // dispatch(actionData)
        } else {
            const localPathName:string = history?.location?.pathname
            const queryString = localPathName.length > 1 && localPathName !== '/login' ? localPathName : ''
            history.push(`/login?${queryString}`)
        }
    }, [token])
    return(
        <div className={s.container}>
            <Header />
            <ModalContainer />
            <Switch>
                <>
                    <Route
                        exact
                        path='/'
                        render={() => (<Redirect to={menuPaths['setting-rtdl'][0].url} />)}
                    />
                    <Route path={menuPaths['setting-rtdl'][0].url} component={SetupUploadServer} key={'setting-rtdl-0'} />
                    <Route path={menuPaths['setting-rtdl'][1].url} component={ConnectingSS} key={'setting-rtdl-1'} />
                </>
            </Switch>
        </div>
    )
}

export default withRouter(MainRouter)
