import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnimalListType from 'Components/AnimalListType'
import AnimalItem from 'Components/AnimalItem'
import AnimalList from 'Components/AnimalList'
import animalApi from 'Api/animalApi'
import { useParams } from 'react-router-dom'
import Pagination from 'Components/Pagination'
import querystring from "query-string";

function Category(props) {
  const [items, setItems] = useState([])
  const [_pagination, setPagination] = useState({
    _page: 1,
    _limit: 30, 
    _totalRows: 22,
  })
  const [filters, setFilter] = useState({
    _limit: 30,
    _page: 1,
    _keyword: '',
  })

  const params = useParams()
  useEffect(() => {
    const { id } = params
    try {
      const paramsString = querystring.stringify(filters)

      const promise = animalApi.getBySpecies(id,paramsString)
      promise.then(({data,pagination}) => {
        const {_totalRows} = pagination
        setPagination({..._pagination,_totalRows})
        setItems(data)
      })
    } catch (err) {
      console.log(err)
    }
  }, [filters,params])

  const _handlePageChange = (newPage) => {
    console.log(newPage)
    setFilter({
      ...filters,
      _page: newPage,
    })
    const newPagination = {
      ..._pagination,
      _page: newPage,
    }
    setPagination(newPagination)
  }

  const _handleFilterChange = (newFilters) => {
    console.log(newFilters)
    setFilter({
      ...filters,
      _page: 1,
      _keyword: newFilters.searchKeyWord,
    })
  }
  const { species } = params
  return (
    <>
      <main className="container">
        <AnimalListType />
        <div className="hilight-title">
          <h1>{species}</h1>
        </div>
        <div className="fillter-bar">
          <div className="fillter-group">
            <span className="fillter-name">Sort by weight</span>
            <select className="option" name="height" id>
              <option value>Increase</option>
              <option value>Decrease</option>
            </select>
          </div>
          <div className="fillter-group">
            <span className="fillter-name">Item per page</span>
            <select className="option" name="height" id>
              <option value>16</option>
              <option value>32</option>
              <option value>48</option>
            </select>
          </div>
          <div className="fillter-group">
            <button className="nav-page">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="nav-page">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>

        <AnimalList>
          {items.map((value, index) => (
            <AnimalItem value={value} key={index} />
          ))}
        </AnimalList>
        <Pagination  pagination={_pagination}
                onPageChange={_handlePageChange} />
      </main>
    </>
  )
}
export default Category
