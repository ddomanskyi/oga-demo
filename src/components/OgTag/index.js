import React from 'react'
import './ogtag.scss'

const OgTag = ({text=false, type=false}) => {
  const typeClass = (type) => {
    switch(type) {
      case 'DanceState':
        return 'pink'
      case 'DanceWorkoutState':
        return 'blue'
      default:
        return ''
    }
  }
  
  const typeText = (type) => {
    switch(type) {
      case 'DanceState':
        return 'Dance Fitness'
      case 'DanceWorkoutState':
        return 'Workout'
      default:
        return ''
    }
  }
  
  const ucFirst = (string) => {
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <button
      className={`og-tag ${typeClass(type)}`}
    >
      <span className="og-tag-text">{ text ? ucFirst(text) : typeText(type)}</span>
    </button>
  )
}

export default OgTag