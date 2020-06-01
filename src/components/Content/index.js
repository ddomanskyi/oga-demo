import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getCategories} from '../../actions/app'
import {getWorkouts} from '../../actions/app'
import './content.scss'
import OgCategories from '../OgCategories'
import OgList from '../OgList'
import OgWorkouts from '../OgWorkouts'

const Content = ({dispatch, categories, workouts}) => {
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getWorkouts())
  }, [])
  
  return (
    <div className="container">
      <div className="content-container" id="content">
        <OgList title="Curated Collections">
          <OgCategories categories={categories} />
        </OgList>
        
        <OgList title="Get started with easy workouts">
          <OgWorkouts workouts={workouts} />
        </OgList>

        <OgList title="Done under 7 minutes">
          <OgWorkouts workouts={workouts} />
        </OgList>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.app.categories,
    workouts: state.app.workouts,
  }
}

export default connect(mapStateToProps)(Content)