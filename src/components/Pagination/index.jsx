import React from "react";
import styles from "./Pagination.module.scss"
import ReactPaginate from "react-paginate"
import {current} from "@reduxjs/toolkit";
const Pagination = ({currentPage,onChangePage}) => {
    return (
        <>
            <ReactPaginate
                className={styles.root}
                breakLabel='...'
                nextLabel='>'
                onPageChange={event =>onChangePage(event.selected +1)}
                pageRangeDisplayed={4}
                pageCount={3}
                forcePage={currentPage - 1}
                previousLabel='<'
            />
        </>
    )
}
export default Pagination