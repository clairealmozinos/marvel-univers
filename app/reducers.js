//
// Creates the main reducer with the asynchronously loaded ones and routes
//

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import ListCharactersReducer from 'containers/ListCharacters/reducer';
import CharacterIdReducer from 'containers/CharacterId/reducer';

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

// Merge route into the global application state
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    listCharacters: ListCharactersReducer,
    characterId: CharacterIdReducer,
    ...asyncReducers,
  });
}
