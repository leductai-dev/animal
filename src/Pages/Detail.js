import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { useHistory,useParams } from "react-router-dom";
import animalApi from 'Api/animalApi'

function Detail(props) {
  const params = useParams()
  const [item, setItem] = useState({})
  const history = useHistory()
  const handle =()=>{
    history.goBack()
  }

  useEffect(() => {
    console.log(params)
    const {id} = params
    console.log(id)
    const promise = animalApi.getDetail(id)
    promise.then(data=>{
      console.log(data)
      setItem(data)
    })
  }, [])
  const {speed,weight,species,name,image,food,description} = item
  return (
    <main className="container">
      <div className="animal-detail">
        <div className="bread-crumb" id="one">
          {/* <a href="http://">Home</a> */}
          <button onClick={handle}>Click</button>
          <span>Lorem, ipsum dolor.</span>
        </div>
        <div className="detail">
          <div className="detail-img">
            <img src={image} alt="" />
          </div>
          <div className="detail-info">
            <h1 className="detail-name">{name}</h1>
            <div className="short-des">
              <span>Species: </span>
              <span>{species}</span>
            </div>
            <div className="short-des">
              <span>Food: </span>
              <span>{food}</span>
            </div>
            <div className="short-des">
              <span>Weight: </span>
              <span>{weight} Kg</span>
            </div>
            <div className="short-des">
              <span>Speed: </span>
              <span>{speed} Km/h</span>
            </div>
            <div className="short-des">
              <span>Description: </span>
              <span>
                {description}
              </span>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: '30px' }} />
        <div className="description">
          <h3 className="description-title">Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            veritatis cumque vel, voluptate nisi nemo incidunt ad sit animi
            laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            vel minus ratione maiores enim? Debitis atque veniam minus quasi eos
            dolorem eligendi ipsum minima consequatur sequi, obcaecati aut.
            Repellendus, corporis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa
            expedita fugiat inventore minus fuga consequatur ea eligendi
            exercitationem necessitatibus ducimus quia modi quibusdam facere
            quis beatae iste quaerat, impedit quas ratione eveniet cumque
            tempore dolor. Veniam tempora voluptatum saepe itaque. Reiciendis,
            itaque. Dolorem nam facilis et rem ratione soluta.
          </p>
        </div>
      </div>
    </main>
  )
}
export default Detail
