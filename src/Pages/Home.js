import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import AnimalListType from 'Components/AnimalListType'
import animalApi from 'Api/animalApi'
import AnimalItem from 'Components/AnimalItem'

function Home(props) {
  const [items, setItems] = useState([])
  const [fechMore, setFechMore] = useState(false)
  const [tmp, setTmp] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const promise = animalApi.getMore(items.length)
    promise.then(({ data }) => {
      const moreItem = [...items]
      const newItems = moreItem.concat(data)
      setItems(newItems)
    })
  }, [fechMore])

  return (
    <>
      <div className="banner">
        <img
          className
          src="./image/banner3-dog-grooming-mobile-min_1920x770_acf_cropped.jpg"
          alt=""
        />
      </div>
      <main className="container">
        <AnimalListType />

        <div className="hilight-title">
          <h1 className>All Animal</h1>
        </div>
        <div className="animal-list ">
          <InfiniteScroll
            dataLength={items.length}
            next={() => {
              setFechMore(!fechMore)
            }}
            hasMore={true}
            loader={null}
          >
            {items &&
              items.map((value, index) => (
                <AnimalItem value={value} key={index} />
              ))}
          </InfiniteScroll>
        </div>
       
      </main>
    </>
  )
}
export default Home
