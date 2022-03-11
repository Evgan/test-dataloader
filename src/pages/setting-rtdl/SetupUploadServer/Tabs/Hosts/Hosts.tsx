import React, {useEffect, useState, useCallback} from 'react'
import {IColumn, IRow} from '@design-system-rt/rtk-ui-kit/components/Table/Table/types'
import {useDispatch} from 'react-redux'
import {useStateTypedSelector} from '../../../../../hooks/useStateTypedSelector'
import {IInit} from '../../../../../store/ducks/hostsTypes'
import {ActionKeys} from '../../../../../store/ducks/hosts'
import PageWithTableLayout from '../../../../../components/Layouts/PageWithTableLayout/PageWithTableLayout'
import RowMenu from '../../../../../components/pureComponents/tableElements/RowMenu/RowMenu'
import AddHostModal from '../../../../../components/Modals/hosts/AddHost/AddHostModal'
import {IShowModal} from '../../../../../store/ducks/modalsTypes'
import {ActionKeys as ActionKeysModals, MODALS_ID} from '../../../../../store/ducks/modals'

const Hosts = () => {
    const [columns, setColumns] = useState<IColumn[]>([])
    const [rows, setRows] = useState<IRow[]>([])
    const dispatch = useDispatch()
    const data: object[] = useStateTypedSelector(state => state.hosts.data)
    const isFetching: boolean = useStateTypedSelector(state => state.hosts.isFetching)

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
                    //filter: true,
                    onSort: handlerSort,
                    onFilter: handlerFilter,
                    wordBreak: true //перенос текста на новую строку
                }
                if (columnKey === 'id') {
                    column.key = 'idKey'
                }
                return column
            })
            const menuColumn:IColumn = {
                key: 'menu',
                width: 56
            }
            setColumns([...columns, menuColumn])
            //setColumns(columns)
            const rows:IRow[] = data.map((row:any, index) => {
                const newRow:IRow = {
                    id: index.toString(),
                    menu: <RowMenu
                        idRow={index.toString()}
                        callbackEdit={handlerEdit}
                        callbackTrash={handlerTrash}
                    />,
                    ...row,
                }
                newRow.key = `row_${index}`
                if (row.id) {
                    newRow.idKey = row.id.toString()
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

    const handlerAddRow = useCallback(() => {
        console.log('handlerAddRow')
        const actionData: IShowModal = {
            type: ActionKeysModals.SHOW_MODAL,
            payload: {
                name: MODALS_ID.ADD_HOST
            }
        }
        dispatch(actionData)
    }, [])

    const handlerEdit = useCallback((idRow) => {
        console.log('handlerEdit')
        console.log(' > idRow = ', idRow)
    }, [])

    const handlerTrash = useCallback((idRow) => {
        console.log('handlerTrash')
        console.log(' > idRow = ', idRow)
    }, [])

    return (
        <>
            <PageWithTableLayout
                columns={columns}
                rows={rows}
                handlerAddRow={handlerAddRow}
                loading={isFetching}
            />
            <AddHostModal />
        </>
    )
}

export default Hosts
