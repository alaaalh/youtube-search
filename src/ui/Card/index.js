import React from 'react'
import Classes from './Card.module.scss'

export default function Card(props) {
  return (
    <div className={Classes.container}>
      {props.children}
    </div>
    
  )
}
