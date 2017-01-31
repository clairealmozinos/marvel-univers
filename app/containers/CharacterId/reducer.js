//
// CharacterId reducer
//


import GET_CHARACTER_ID from './constants';

const initialState = {
  character: [],
};

export default function CharacterIdReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER_ID:
      return Object.assign({}, state, {
        character: action.character,
      });
    default:
      return state;
  }
}
