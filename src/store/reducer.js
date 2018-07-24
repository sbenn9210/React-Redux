//global state stored using Redux

const initialState = {
  counter : 0,
  counterHistory : []
}


const reducer = (state = initialState,action) => {
  switch(action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter : state.counter + 1
      }
    case "DECREMENT_COUNTER":
        return {
          ...state,
          counter : state.counter -1
        }
    case "SAVE_HISTORY":
      return {
        ...state,
        counterHistory : state.counterHistory.concat(state.counter)
      }

  }
  return state
}

export default reducer
