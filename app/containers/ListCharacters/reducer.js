//
// ListCharacters reducer
//


import GET_CHARACTERS from './constants';

const initialState = {
  characters: [],
};

export default function ListCharactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return Object.assign({}, state, {
        characters: action.characters,
      });
    default:
      return state;
  }
}
