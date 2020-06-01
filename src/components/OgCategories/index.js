import React from 'react'
import './ogcategories.scss'

const OgCategories = ({categories}) => {
  const classesConfig = {
    0: 'strength',
    1: 'conditioning',
    2: 'cardio',
    3: 'dance-fitness',
  }
  
  const imagesConfig = {
    0: 'man-workout.png',
    1: 'girl-workout.png',
    2: 'path/to/s3/image1.png',
    3: 'path/to/s3/image2.png',
  }

  const handleClick = slug => {
    console.log('need to setup router for /' + slug);
    // push(slug)
  }
  
  return (
    <div className="categories-container">
      <ul className="categories-list">
       {
        categories.map((category, i) => {
           return (
            category.active ?
            <li
              key={i}
              className={`categories-item ${classesConfig[i]}`}
              onClick={handleClick(category.slug)}  
            >
              <img src={`/assets/images/${imagesConfig[i]}`} alt="" />
              <h1>{category.name}</h1>
            </li>
            : ''
           )
         })
       }
      </ul>
    </div>
  )
}

export default OgCategories