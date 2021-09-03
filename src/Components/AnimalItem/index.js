import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {transferUrl} from 'Utils/transferUrl'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function AnimalItem({value}) {
  const dispatch = useDispatch()
  //fake random image height
  const hg = Math.floor(Math.random() * 3 + 1)
  const height =`${hg}00px`
  const {species,id,image,name,description} = value

  return (
    <>
      <div  className="animal-item">
        <Link className="animal-link" 
        to ={ {pathname: `/${species}/${transferUrl(name)}.${id}`,
        state: { id: id },
        hash: "#one",
        }}>
          <img
            src={image} height={height} width="100%"
            alt=""
            style={{objectFit: 'cover'}}
          />
          <div className="animal-info">
            <p className="animal-name">{name}</p>
            <span className="animal-description">
                {description}
            </span>
          </div>
          <div className="hover-effect">
            <span>
              <i className="fas fa-link" />
            </span>
          </div>
        </Link>
      </div>
    </>
  )
}
export default AnimalItem