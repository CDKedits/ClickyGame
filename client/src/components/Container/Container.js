import React from 'react'

const Container = props => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Click on an image to earn points, but don't click on any more than once!</h1>
        </div>
        <div className="image-container">
          <div className="div1 image" onClick={props.handleClick}></div>
          <div className="div2 image" onClick={props.handleClick}></div>
          <div className="div3 image" onClick={props.handleClick}></div>
          <div className="div4 image" onClick={props.handleClick}></div>
          <div className="div5 image" onClick={props.handleClick}></div>
          <div className="div6 image" onClick={props.handleClick}></div>
          <div className="div7 image" onClick={props.handleClick}></div>
          <div className="div8 image" onClick={props.handleClick}></div>
        </div>
      </div>
    </>
  )
}

export default Container