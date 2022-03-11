import React from 'react'
import {Loader} from '@design-system-rt/rtk-ui-kit';
import {ILoaderProps} from '@design-system-rt/rtk-ui-kit/components/Loader/types';

const Preloader: React.FC<ILoaderProps> = (props) => {
    return (
        <Loader {...props}/>
    )
}

export default Preloader
