import React from 'react'
import './oglist.scss'

const OgList = ({title, children}) => {
  return (
    <div className="oga-list">
      <div className="oga-list-header">
        <h1 className="oga-list-title">{title}</h1>
        <button className="oga-list-button">See all</button>
      </div>

      <div className="oga-list-content">
        {children}
      </div>
    </div>
  )
}

export default OgList