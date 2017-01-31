//
// CharactersId actions
//

import request from 'utils/request';
import GET_CHARACTER_ID from './constants';

export function characterId(character) {
  return {
    type: GET_CHARACTER_ID,
    character,
  };
}

export function getCharacterId(id) {
  return dispatch => request
    .get(`/v1/public/characters/${id}`)
    .end((err, res) => {
      if (!err) {
        console.log(res.body.data.results);
        dispatch(characterId(res.body.data.results));
      } else {
        console.log(err);
      }
    });
}
