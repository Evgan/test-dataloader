import React, { useCallback } from 'react';
import {AutoSizer, InfiniteLoader, List} from 'react-virtualized'

import { SCROLLBAR_WIDTH } from '../../../../constants/html';
import s from './TableVirtualized.module.scss';


declare interface ITableVirtualized {
    data: [],
    rowRenderer: any,
    loadMoreRows: any,
    isFetching: boolean,
    page: number,
    totalRows: number,
    rowHeight: number
}

const TableVirtualized = (props: ITableVirtualized) => {
    const {
        data,
        rowRenderer: rowRendererParent,
        loadMoreRows: loadMoreRowsParent,
        isFetching,
        page,
        totalRows,
        rowHeight
    } = props;

    /**
     * lib: react-virtualized
     * Рендеринг списка
     * */
    const rowRenderer = useCallback(
        e => {
            const {
                index,
                key,
                style
            } = e || {}
            const rowData = data && data[index];
            return (
                <div
                    key={key}
                    style={style}
                >
                    <div className={s.rowItem}>
                        {rowRendererParent(rowData)}
                    </div>
                </div>
            )
        },
        [data, rowRendererParent]
    );

    /**
     * lib: react-vitrualized
     * Запрос в бд следующих элементов списка
     * вызывается скроллом
     * */
    const loadMoreRows = useCallback(
        () => {
            if (!isFetching) {
                console.log(' > TableVirtualized > loadMoreRows > page = ', page)
                const nextPage = page !== undefined ? page + 1 : 0;
                console.log(' > TableVirtualized > loadMoreRows > nextPage = ', nextPage)
                loadMoreRowsParent({ page: nextPage });
            }
        },
        [page, loadMoreRowsParent, isFetching]
    );

    /**
     * lib: react-vitrualized
     * Проверка: Все ли элементы загружены
     * */
    // @ts-ignore
    const isRowLoaded = ({ index }) => index < data?.length;


    return (
        <div
            style={{ marginRight: -SCROLLBAR_WIDTH }}
            className={s.container}
        >
            <InfiniteLoader
                isRowLoaded={isRowLoaded}
                // @ts-ignore
                loadMoreRows={loadMoreRows}
                rowCount={totalRows}
            >
                {({ onRowsRendered, registerChild }) => (
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                {...props}
                                //className={s.log}
                                width={width}
                                height={height}
                                rowCount={data?.length}
                                ref={registerChild}
                                onRowsRendered={onRowsRendered}
                                rowRenderer={rowRenderer}
                                rowHeight={rowHeight}
                            />
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        </div>
    )
}

// TableVirtualized.propTypes = {
//     data: p.array,
//     rowRenderer: p.func.isRequired,
//     loadMoreRows: p.func.isRequired,
//     isFetching: p.bool,
//     page: p.number,
//     totalRows: p.number,
//     rowHeight: p.number
// }
// TableVirtualized.defaultProps = {
//     data: [],
//     isFetching: false,
//     page: 0,
//     totalRows: 0,
//     rowHeight: 32
// }

export default TableVirtualized;
