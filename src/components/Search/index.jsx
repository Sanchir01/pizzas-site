import React from 'react';
import styles from './Search.module.scss'
import logoSearch from '../../assets/img/search.png'
import logoClose from '../../assets/img/close.png'
import {SearchContext} from "../../App";

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext)

    const inputRef = React.useRef()
    const onClickValue = () => {
        setSearchValue('');
        inputRef.current.focus();
    }
    // React.useEffect()
    return (
        <div className={styles.root}>
            <img className={styles.search} src={logoSearch} alt="ser-icon"/>
            <input ref={inputRef} value={searchValue} onChange={event => setSearchValue(event.target.value)} className={styles.input}
                   placeholder="Search pizzas..."/>
            {searchValue && (
                <img onClick={onClickValue} className={styles.close} src={logoClose} alt="close-icon"/>)}
        </div>
    )
}
export default Search