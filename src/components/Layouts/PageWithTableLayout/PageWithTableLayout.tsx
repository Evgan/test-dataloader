import React from 'react'
import {Table} from '@design-system-rt/rtk-ui-kit'

import Header from '../../pureComponents/tableElements/Header/Header'
import s from './PageWithTableLayout.module.scss'
import {IColumn, IRow} from '@design-system-rt/rtk-ui-kit/components/Table/Table/types'
import {UI_STYLE_CONFIG} from '../../pureComponents/UI/constants'

declare interface IPageWithTableLayout {
    columns: IColumn[],
    rows: IRow[],
    loading: boolean,
    handlerAddRow?(): void
}


/**
 * TODO DONE: Смена местами столбцов таблицы
 * TODO DONE: Изменение ширины столбцов таблицы - resizable
 * TODO: Настройка фильтрации в Таблице
 * TODO: чекбоксы выбора строк в Таблице
 * TODO: Вывод подробной инфы (tooltip) при наведении на ячейку
 * TODO: После релиза таблиц проверить, что бы maxHeight был привязан к высоте контейнера а не 100vh
 */


const PageWithTableLayout = ({
                                 columns,
                                 rows,
                                 loading,
                                 handlerAddRow
                             }:IPageWithTableLayout) => {
    return (
        <div className={s.container}>
            <div className={s.table}>
                    <Header callbackAddRow={handlerAddRow}/>
                    <Table
                        //bordered
                        shape={UI_STYLE_CONFIG.shape}
                        columns={columns}
                        rows={rows}
                        freezeHeader
                        resizable // Изменение ширины столбцов таблицы
                        draggable // Смена местами столбцов таблицы
                        //filterPosition='inline'
                        virtualScroll
                        loading={loading}
                        // maxHeight !! Хочется иметь привязку высоты к высоте контейнера
                        //pagination
                        //paginationProps
                    />
                {/*<Table
                    columns={[
                        {
                            key: 'c1',
                            title: 'колонка 1'
                        },
                        {
                            key: 'c2',
                            title: 'колонка 2'
                        }
                    ]}
                    rows={[
                        {id: '1', c1: 'ячейка c1r1', c2: 'ячейка c2r1'},
                        {id: '2',c1: 'ячейка c1r2', c2: 'ячейка c2r2'},
                        {id: '3',c1: 'ячейка c1r3', c2: 'ячейка c2r3'}
                    ]}
                />*/}
            </div>
        </div>
    )
}

export default PageWithTableLayout
