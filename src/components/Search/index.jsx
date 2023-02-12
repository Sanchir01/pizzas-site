import React from 'react';
import styles from './Search.module.scss'
import logoSearch from '../../assets/img/search.png'
import logoClose from '../../assets/img/close.png'
import debounce from 'lodash.debounce'
import {SearchContext} from "../../App";

const Search = () => {
    const [value, setValue] = React.useState('')
    const {setSearchValue} = React.useContext(SearchContext)

    const inputRef = React.useRef()

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str)
        },1000),[]
    )
    const onClickValue = () => {
        setSearchValue('');
        setValue('')
        inputRef.current.focus();
    }
    const onChangeInput =value => {
        setValue(value.target.value)
        updateSearchValue(value.target.value)
    }
    // React.useEffect()
    return (
        <div className={styles.root}>
            <img className={styles.search} src={logoSearch} alt="ser-icon"/>
            <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input}
                   placeholder="Search pizzas..."/>
            {value && (
                <img onClick={onClickValue} className={styles.close} src={logoClose} alt="close-icon"/>)}
        </div>
    )
}
export default Search