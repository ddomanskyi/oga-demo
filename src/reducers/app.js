const initialState = {
  categories: [],
  workouts: [],
  banner: {},
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BANNER':
      return {
        ...state,
        banner: action.payload
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    case 'SET_WORKOUTS':
      return {
        ...state,
        workouts: action.payload
      }
    default: return state 
 }
}

export default app

