
export const getBreadCrumbs = (pathname:string) => {
    console.log('################### getBreadCrumbs()')
    console.log(' > pathname:')
    console.log(pathname)
    let result: string
    const paths = pathname.split('/')
    console.log(' > paths:')
    console.log(paths)
    const isGroup = paths.length === 3
    if (isGroup) {
        const group = paths[1]
        const groupPages = menuPaths[group]
        const pathItem: menuItemType[] = groupPages.filter(item => item.url === pathname)
        if (pathItem.length > 0) {
            result = pathItem[0].title
        }
    }
    return result
}

export type menuItemType ={
    url: string,
    title: string
}

declare type menuPathsType = {
    [id:string]: menuItemType[]
}

export const menuPaths: menuPathsType = {
    'setting-rtdl': [
        {
            url: '/setting-rtdl/setup-upload-server',
            title: 'Настройка серверов выгрузки',

        },
        {
            url:'/setting-rtdl/connect-ss',
            title: 'Подключение к СИ'
        },
        {
            url:'/setting-rtdl/3',
            title: 'Связь СИ с серверами выгрузки'
        },
        {
            url:'/setting-rtdl/4',
            title: 'Пулы'
        },
        {
            url:'/setting-rtdl/5',
            title: 'Очереди'
        },
        {
            url:'/setting-rtdl/6',
            title: 'Настройка глобальных параметров'
        }
    ],
    'regular-upload' : [
        {
            url: '/regular-upload/1',
            title: 'Команды',

        },
        {
            url:'/regular-upload/2',
            title: 'Наборы команд (создание дага)'
        },
        {
            url:'/regular-upload/3',
            title: 'Связи заданий'
        }
    ]
}
