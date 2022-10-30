import React from 'react'
import Classes from './Card.module.sass'

export default function Card() {
  return (
    <div className={Classes.container}>
      <div className='container__videoContainer'>
      </div>
      <div className='container__videoDiscription'>
        <h5></h5>
        <small></small>
      </div>
    </div>
  )
}
