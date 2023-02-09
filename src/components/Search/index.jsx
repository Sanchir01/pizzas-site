import React from 'react';
import styles from './Search.module.scss'
import logoSearch from '../../assets/img/search.png'
import logoClose from '../../assets/img/close.png'
const Search = ({searchValue,setSearchValue}) =>{
    return (
        <div className={styles.root}>
            <img className={styles.search} src={logoSearch} alt="ser-icon" />
            <input value={searchValue} onChange={event =>setSearchValue(event.target.value)} className={styles.input} placeholder="Search pizzas..."/>
            { searchValue && (<img onClick={() => setSearchValue('')} className={styles.close} src={logoClose} alt="close-icon"/>)}
        </div>
    )
}
export default Search