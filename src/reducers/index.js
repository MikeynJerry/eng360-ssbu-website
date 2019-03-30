const initialUIState = {
  rightJoyconColor: 'gray',
  leftJoyconColor: 'gray'
}

export const UIReducer = (state = initialUIState, action) => {
  switch (action.type) {
    case 'CHANGE_RIGHT_COLOR':
      return Object.assign({}, state, { rightJoyconColor: action.payload })
    case 'CHANGE_LEFT_COLOR':
      return Object.assign({}, state, { leftJoyconColor: action.payload })
    default:
      return state
  }
}

const initialCharacterState = {
  bigLink: '4/44/Mario_SSBU.png/600px-Mario_SSBU.png',
  name: 'Mario'
}

export const CharacterReducer = (state = initialCharacterState, action) => {
  switch (action.type) {
    case 'SELECT_CHARACTER':
      return Object.assign({}, state, { ...action.payload })
    default:
      return state
  }
}
