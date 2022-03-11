import React, {ChangeEvent, useState} from 'react'

import s from './Search.module.scss'
import {Search as SearchIcon} from '../icons'
import {Input} from '../index'

export interface ISearch {
    onChange?:(value: string) => void
}

const Search = ({onChange}:ISearch) => {
    const [inputValue, setInputValue] = useState('')

    const handlerInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const inputValue = e?.target?.value
        setInputValue(inputValue)
        onChange(inputValue)
    }

    return <Input
        classNameContainer={s.container}
        value={inputValue}
        placeholder='Search'
        icon={<SearchIcon size={15}/>}
        onChange={handlerInputChange}
    />
}

export default Search
