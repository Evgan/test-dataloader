import React from 'react';
import cx from 'classnames';

import s from './Cell.module.scss';
import KeyHelper from '../../../../helpers/KeyHelper';

declare interface ICell {
    classNames:string
}

const Cell:React.FC<ICell> = ({children, classNames}) => (
    <div
        className={cx(s.cell, classNames)}
        key={KeyHelper()}
    >
        {children}
    </div>
)

export default Cell;
