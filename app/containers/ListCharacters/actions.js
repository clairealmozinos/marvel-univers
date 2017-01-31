//
// ListCharacters actions
//

import request from 'utils/request';
import GET_CHARACTERS from './constants';

export function listCharacters(characters) {
  return {
    type: GET_CHARACTERS,
    characters,
  };
}

export function getListCharacters() {
  return dispatch => request
    .get('/v1/public/characters')
    .end((err, res) => {
      if (!err) {
        console.log(res.body.data.results);
        dispatch(listCharacters(res.body.data.results));
      } else {
        console.log(err);
      }
    });
}
