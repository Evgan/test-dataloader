import React from 'react'

import s from './SetupUploadServer.module.scss'
import PageWithTabsLayout from '../../../components/Layouts/PageWithTabsLayout/PageWithTabsLayout'
import Hosts from 'Pages/setting-rtdl/SetupUploadServer/Tabs/Hosts/Hosts'
import ConnectionOptions from 'Pages/setting-rtdl/SetupUploadServer/Tabs/ConnectionOptions/ConnectionOptions'

const SetupUploadServer = () =>
    <div className={s.container}>
        <PageWithTabsLayout
            tabsName={[
                'Сервера выгрузки',
                'Параметры соединения'
                // 'Путь к исполняемым файлам',
                // 'Путь к каталогам FTP',
                // 'Путь к каталогам архивации'
            ]}
        >
            <Hosts />
            <ConnectionOptions />
        </PageWithTabsLayout>
    </div>


export default SetupUploadServer
