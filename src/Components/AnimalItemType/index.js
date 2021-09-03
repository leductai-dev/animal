import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function AnimalItemType({value}) {
  useEffect(() => {
      
  }, [])
  const {name,image,id } =value
  return (
    <>
      <div className="animal-type-item">
            <Link to={`/${name}.${id}`} >
              <img
                className="animal-type-image"
                src={image}
                alt=""
              />
              <p className="animal-type-name">{name}</p>
            </Link>
          </div>
    </>
  )
}
export default AnimalItemType
