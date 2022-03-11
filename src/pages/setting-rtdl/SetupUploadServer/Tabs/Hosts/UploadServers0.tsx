import React, {useEffect, useState} from 'react'
import {Table} from '@design-system-rt/rtk-ui-kit'
import {Search} from '../../../../../components/pureComponents/UI'
import {IColumn, IRow} from '@design-system-rt/rtk-ui-kit/components/Table/Table/types'
import {useDispatch} from 'react-redux'
import {useStateTypedSelector} from '../../../../../hooks/useStateTypedSelector'
import {IInit} from '../../../../../store/ducks/hostsTypes'
import {ActionKeys} from '../../../../../store/ducks/hosts'
import s from './Hosts.module.scss'

const UploadServers0 = () => {
    const [columns, setColumns] = useState<IColumn[]>([])
    const [rows, setRows] = useState<IRow[]>([])
    const dispatch = useDispatch()
    const data: object[] = useStateTypedSelector(state => state.hosts.data)

    useEffect(() => {
        const actionData: IInit = {
            type: ActionKeys.INIT
        }
        dispatch(actionData)
    }, [])

    const handlerSort = () => {
        console.log('============= handlerSort()')
    }
    const handlerFilter = (value: string, operator?: string) => {
        console.log('============= handlerFilter()')
        console.log('> value:')
        console.log(value)
        console.log('> operator:')
        console.log(operator)
    }
    useEffect(() => {
        if (data?.length > 0) {
            const firstRow = data[0]
            const columnsKey = Object.keys(firstRow)
            const columns:IColumn[] = columnsKey.map(columnKey => {
                const column: IColumn = {
                    key:columnKey,
                    title: columnKey,
                    sortable: true,
                    filter: true,
                    onSort: handlerSort,
                    onFilter: handlerFilter,
                    wordBreak: true //перенос текста на новую строку
                }
                if (columnKey === 'id') {
                    column.key = 'idKey'
                }
                return column
            })
            setColumns(columns)
            const rows:IRow[] = data.map((row:any, index) => {
                const newRow:IRow = {...row, id: index.toString()}
                newRow.key = `row_${index}`
                if (row.id) {
                    newRow.idKey = row.id.toString()
                }
                if (row.address) {
                    //newRow.address = 'address 111'
                    newRow.address = {
                        content: 'address',
                        tooltip: {
                            header: <div>pfr{' '}<br />{' '}3{' '}</div>,
                            text: <div>Основной текст Основной текст Основной текст</div>
                        }
                    }
                }
                if (row.company) {
                    newRow.company = 'company 222'
                }
                return newRow
            })
            setRows(rows)
        }
    }, [data])

    console.log('columns:')
    console.log(columns)
    console.log('rows:')
    console.log(rows)

    /**
     * TODO DONE: Смена местами столбцов таблицы
     * TODO DONE: Изменение ширины столбцов таблицы - resizable
     * TODO: Настройка фильтрации в Таблице
     * TODO: чекбоксы выбора строк в Таблице
     * TODO: Вывод подробной инфы (tooltip) при наведении на ячейку
     * TODO: После релиза таблиц проверить, что бы maxHeight был привязан к высоте контейнера а не 100vh
     */

    return (
        <div className={s.container}>
            <div className={s.table}>
                {columns?.length > 0 && rows?.length > 0 && (
                    <Table
                        header={{
                            title: 'UploadServer',
                            content: (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexGrow: 1,
                                    }}
                                >
                                    <div style={{ width: '530px' }}>
                                        <Search />
                                    </div>
                                </div>
                            )
                        }}
                        bordered
                        columns={columns}
                        rows={rows}
                        freezeHeader
                        resizable // Изменение ширины столбцов таблицы
                        draggable // Смена местами столбцов таблицы
                        filterPosition='inline'
                        virtualScroll
                        // maxHeight !! Хочется иметь привязку высоты к высоте контейнера
                        //pagination
                        //paginationProps
                    />
                )}
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

export default UploadServers0
