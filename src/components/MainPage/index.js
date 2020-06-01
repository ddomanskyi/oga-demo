import React, {useEffect} from 'react';
import {getBanner} from '../../actions/app'
import {connect} from 'react-redux'
import './mainpage.scss'
import OgButton from '../OgButton'
import OgHeader from '../OgHeader'

const MainPage = ({dispatch, bannerUrl}) => {
  useEffect(() => {
    dispatch(getBanner())
  }, [])

  const clickHandler = () => {
    let el = document.getElementById("content");
    el.scrollIntoView();
  }

  return (
    <div className="main-page-container">
      {
        (bannerUrl && bannerUrl !== '') ?
        <video
          className="main-page-video-baner"
          src={bannerUrl}
          autoPlay={true}
          muted={true}
          controls={false}
          loop={true}
        />
        : <img src="https://cdn.oga.fit/demo-cover.jpg" className="img-bg" alt="" />
      }

      <OgHeader />

      <div className="main-page-content">
        <h1 className="main-page-title">Strength and conditioning in 21 day challenge</h1>
        
        <div className="main-page-button-wrapper">
          <OgButton text="Workout Now" onClick={clickHandler} />
        </div>
        <div className="gradient-overlay" />
      </div>
      <div className="gradient-line"></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bannerUrl: state.app.banner.active ? state.app.banner.image_link : ''
  }
}

export default connect(mapStateToProps)(MainPage)