import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ErrorPage(props) {
  const [colorPicker, setColorPicker] = useState(false)
  //   const Context = useSelector((state) => state.contextMenu)
  const root = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {}, [])

  return (
    <>
     <h1>Error Page</h1>
    </>
  )
}
export default ErrorPage
