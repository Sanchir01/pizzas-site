import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Pizza-Block/Skeleton";
import PizzaBlock from "../components/Pizza-Block/PizzaBlock";
import Pagination from "../components/Pagination";
import {setCategoryId, setCurrentPage, setPageCount} from "../redux/slice/filterSlice";
import axios from "axios";


const Home = ({searchValue}) => {
    const dispatch = useDispatch()
    const {categoryId, sort} = useSelector(state => state.filter)
    const currentPage = useSelector(state => state.filter.pageCount)

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    // const [currentPage, setCurrentPage] = React.useState(1);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }

    React.useEffect(() => {
        setIsLoading(true)
        const order = sort.sortProperty.includes('-') ? "asc" : "desc";
        const sortBy = sort.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''
        axios.get(`https://63be7d1df5cfc0949b58980f.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                setItems((res.data))
                setIsLoading(false)

            })
        window.scrollTo(0, 0)
    }, [categoryId, sort.sortProperty, searchValue, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Skeleton
                        key={index}/>) : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </>
    )
}
export default Home;