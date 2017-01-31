//
// ListHeroes reducer
//


import GET_HEROES from './constants';

const initialState = {
  heroes: [],
};

export default function ListHeroesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      return Object.assign({}, state, {
        heroes: action.heroes,
      });
    default:
      return state;
  }
}
