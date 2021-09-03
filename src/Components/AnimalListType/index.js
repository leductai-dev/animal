import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnimalItemType from 'Components/AnimalItemType'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import animalApi from 'Api/animalApi'

import { useParams } from 'react-router-dom'

function AnimalListType(props) {
  const dispatch = useDispatch()
  const [items, setItems] = useState([])

  useEffect(() => {
    const promise = animalApi.getAllSpecies()
    promise
      .then((data) => {
        setItems(data)
      })
      .catch((errors) => {
        console.log(errors)
      })
  }, [])
  const options = {
    iloop: true,
    items: 5, // Select Item Number
    autoplay: true,
    dots: false,
    nav: false,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  }
  return (
    <div className="animal-type-list ">
      <OwlCarousel className="owl-theme" {...options} loop nav>
        {items.map((value, index) => (
            <AnimalItemType value={value} key={index} />
          ))}
      </OwlCarousel>
    </div>
  )
}
export default AnimalListType
