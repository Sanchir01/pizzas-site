import React from 'react';
import styles from './NotFoundInfo.module.scss'
import {Link} from "react-router-dom";
const NotFoundInfo = () => {
    return (
        <h1 className={styles.root}>
            <p className={styles.text}>Ничего нету )</p>
            <Link to="/"><button className={styles.button}>назад</button></Link>
        </h1>
    )
}
export default NotFoundInfo