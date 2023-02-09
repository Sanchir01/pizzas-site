import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Pizza-Block/Skeleton";
import PizzaBlock from "../components/Pizza-Block/PizzaBlock";
import Pagination from "../components/Pagination";

 const Home = ({searchValue}) => {
     const [items, setItems] = React.useState([])
     const [isLoading, setIsLoading] = React.useState(true)

     const [categoryId, setCategoryId] = React.useState(0);
     const [currentPage, setCurrentPage] = React.useState(1);
     const [sortType,setSortType] = React.useState(
         {
             name: 'популярности',
             sortProperty: 'rating'
         }
     )

     React.useEffect(() => {
         setIsLoading(true)
         const order = sortType.sortProperty.includes('-') ? "asc" : "desc";
         const sortBy = sortType.sortProperty.replace('-','');
         const category = categoryId > 0 ? `&category=${categoryId}`:''
         const search = searchValue  ? `&search=${searchValue}`:''
         fetch(`https://63be7d1df5cfc0949b58980f.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`).then(res => {
             return res.json()
         }).then(arr => {
             setItems((arr))
             setIsLoading(false)
         })
         window.scrollTo(0,0)
     }, [categoryId,sortType,searchValue,currentPage])
  return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Skeleton
                        key={index}/>) : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
            <Pagination onChangePage = {number =>setCurrentPage(number)}/>
        </>
  )
 }
 export default Home;