const initialState = {
  items: []
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ITEMS":
      return {
        ...state,
        items: action.items
      }
    case "POST_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }
    default:
      return state

  }
}

export default itemReducer;
