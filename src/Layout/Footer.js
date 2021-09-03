import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Footer(props) {
  const [colorPicker, setColorPicker] = useState(false)
  //   const Context = useSelector((state) => state.contextMenu)
  const root = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    /*   document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    } */
  }, [])

  return (
    <footer>
      <div className="list-dog ">
        <img className="dog-item" src="./image/listdog/dog1.png" alt="" />
        <img className="dog-item" src="./image/listdog/dog2.png" alt="" />
        <img className="dog-item" src="./image/listdog/dog3.png" alt="" />
        <img className="dog-item" src="./image/listdog/dog4.png" alt="" />
        <img className="dog-item" src="./image/listdog/dog5.png" alt="" />
        <img className="dog-item" src="./image/listdog/dog6.png" alt="" />
        <img className="dog-item" src="./image/listdog/dog7.png" alt="" />
        <img className="dog-item" src="./image/listdog/dog8.png" alt="" />
      </div>
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-item" />
              <div className="footer-item" />
              <div className="footer-item" />
              <div className="footer-item" />
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">Copyright 2021 - Tai Duc Le</div>
    </footer>
  )
}
export default Footer
