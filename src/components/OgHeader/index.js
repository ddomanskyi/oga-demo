import React from 'react'
import './ogheader.scss'

const OgHeader = () => {
  return (
    <div className="main-page-header-wrapper">
      <div className="main-page-logo-wrapper">
        <img src="https://cdn.oga.fit/logo.png" alt="" />
      </div>

      <div className="main-page-menu-wrapper">
        <ul className="main-page-menu">
          <li>
            <button className="active">Home</button>
          </li>
          <li>
            <button href="#">Workouts</button>
          </li>
          <li>
            <button href="#">Tribe</button>
          </li>
        </ul>
      </div>

      <div className="main-page-avatar-wrapper">
        <div className="main-page-avatar">G</div>
      </div>
    </div>
  )
}

export default OgHeader