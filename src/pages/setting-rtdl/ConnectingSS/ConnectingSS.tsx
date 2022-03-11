import React, {useEffect, useState, useCallback} from 'react'

import s from './ConnectingSS.module.scss'
import TableVirtualized from '../../../components/pureComponents/Tables/TableVirtualized/TableVirtualized'
import Cell from '../../../components/pureComponents/Tables/Cells/Cell'
import KeyHelper from '../../../helpers/KeyHelper'
import {useDispatch} from 'react-redux'
import {useStateTypedSelector} from '../../../hooks/useStateTypedSelector'
import {IInit} from '../../../store/ducks/connectingSSTypes'
import {ActionKeys} from '../../../store/ducks/connectingSS'
import {Typography} from '../../../components/pureComponents/UI'
import {UI_CONSTANT} from '../../../components/pureComponents/UI/constants'

const ConnectingSS = () => {
    const [rows, setRows] = useState<[]>([])
    const [totalRows, setTotalRows] = useState<number>(0)
    const dispatch = useDispatch()
    const data: object[] = useStateTypedSelector(state => state.connectingSS.data)
    const isFetching: boolean = useStateTypedSelector(state => state.connectingSS.isFetching)
    const page:number = 0

    useEffect(() => {
        const actionData: IInit = {
            type: ActionKeys.INIT
        }
        dispatch(actionData)
    }, [])

    useEffect(() => {
        if (data) {
            const rows:any = data.map(row => Object.values(row))
            setRows(rows)
            setTotalRows(rows.length)
        }
    }, [data])

    const rowRenderer = useCallback(
    rowData => (
            rowData?.map(
                (valueCell:string, indexCell: number) => indexCell < 6
                    ? (
                        <Cell
                            key={KeyHelper()}
                            classNames={s.cellSize}
                        >
                            <Typography
                                tag='div'
                                color={UI_CONSTANT.TYPOGRAPHY_COLORS.main}
                                variant={UI_CONSTANT.TYPOGRAPHY_VARIANTS.bodyM}
                            >
                                {valueCell}
                            </Typography>
                        </Cell>)
                    : null
            )
        ),
    []
    )
    const loadMoreRows = useCallback(
        () => (
            console.log('############################### loadMoreRows()')
        ),
        []
    )
    return (
        <div className={s.container}>
            ConnectingSS
            <div className={s.table}>
                <div className={s.list}>
                    {totalRows > 0 && (
                        <TableVirtualized
                            data={rows}
                            rowRenderer={rowRenderer}
                            loadMoreRows={loadMoreRows}
                            isFetching={isFetching}
                            page={page}
                            totalRows={totalRows}
                            rowHeight={32}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ConnectingSS
