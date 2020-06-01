import React from 'react'
import './ogworkouts.scss'
import OgTag from '../OgTag'

const OgWorkouts = ({workouts}) => {
  const timeConverter = seconds => {
    return (
      new Date(seconds * 1000).toISOString().substr(14, 5)
    )
  }

  return (
    <div className="workouts-container">
      <ul className="workouts-list">
      {
        workouts.map((workout, i) => {
           return (
            workout.active ?
              <li key={i} className="workouts-item">
                <div className="workouts-video-preview">
                  <div className="workout-video-image">
                    <img className="workout-img" src={workout.card_image} alt="" />
                  </div>
                  <div className="workout-video-time">{ timeConverter(workout.duration) }</div>
                </div>
                <div className="workouts-description">
                  <h1>{workout.title}</h1>

                  <div className="workouts-description-footer">
                    <OgTag type={workout.workout_type} />
                    <OgTag text={workout.difficulty} />
                  </div>
                </div>
              </li>
            : ''
           )
         })
       }
      </ul>
    </div>
  )
}

export default OgWorkouts