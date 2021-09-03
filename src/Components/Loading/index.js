import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'tachyons-components'
import { useSelector,  } from 'react-redux'

// import { showLoading } from 'Selectors/app'

const Section = styled('div')`
flex flex-wrap content-center justify-center w-100 h-100`

const Loading = () => {
    const {showLoading} = useSelector(state=> state.App)
  return (showLoading) && (
    <Section
      style={{
        position: 'fixed',
        zIndex: 10,
        backgroundColor: 'rgb(0 0 0 / 33%)',
      }}
    >
      <ReactLoading type="bars" color="#fff" height={67} width={37} />
    </Section>
  )
}
export default Loading
