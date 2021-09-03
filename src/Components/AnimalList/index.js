import React, { useState, useRef, useEffect } from 'react'

function AnimalList({ children }) {

  return (
    <div className="animal-list ">
      {children}
    </div>
  )
}
export default AnimalList
