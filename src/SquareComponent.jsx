import React from 'react'

const SquareComponent = (props) => {

    const classes = props.className? `${props.className} spann` : "spann"
  return (
    <>
    <span className={classes} onClick={props.onClick}>

         {props.state} 

    </span>
    </>
  )
}

export default SquareComponent