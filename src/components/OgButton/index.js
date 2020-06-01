import React from 'react'
import './ogbutton.scss'

const OgButton = ({text, onClick}) => {
  const handleClick = (e) => {
		e.stopPropagation()
		if (onClick) {
			onClick()
		}
  }
  
  return (
    <button
      className="og-button"
      onClick={handleClick}
    >
      <span className="og-button-text">{text}</span>
    </button>
  )
}

export default OgButton