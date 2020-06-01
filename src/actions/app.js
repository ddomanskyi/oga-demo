export const getBanner = () => dispatch => {
  return fetch('https://c0f2c22e-6537-4fda-9b95-3f5a0b05b590.mock.pstmn.io/banner').then(async response => {
    if (response.ok) {
      const contentType = response.headers.get('content-type')
      
      if (contentType.indexOf('application/json') + 1) {
        const json = await response.json()
        const [data] = json
        dispatch(setBanner(data))
      }
    }  
  })
}

export const setBanner = (payload) => {
  return {
    type: 'SET_BANNER',
    payload
  }
}

export const getCategories = () => dispatch => {
  fetch('https://c0f2c22e-6537-4fda-9b95-3f5a0b05b590.mock.pstmn.io/category').then(async response => {
    if (response.ok) {
      const contentType = response.headers.get('content-type')
      
      if (contentType.indexOf('application/json') + 1) {
        const data = await response.json()
        dispatch(setCategories(data))
      }
    }  
  })
}

export const setCategories = (payload) => {
  return {
    type: 'SET_CATEGORIES',
    payload
  }
}

export const getWorkouts = () => dispatch => {
  fetch('https://c0f2c22e-6537-4fda-9b95-3f5a0b05b590.mock.pstmn.io/workout').then(async response => {
    if (response.ok) {
      const contentType = response.headers.get('content-type')
      
      if (contentType.indexOf('application/json') + 1) {
        const data = await response.json()
        dispatch(setWorkouts(data))
      }
    }  
  })
}

export const setWorkouts = (payload) => {
  return {
    type: 'SET_WORKOUTS',
    payload
  }
}
