//
// ListHeroes actions
//

import crypto from 'crypto';
import request from 'utils/request';
import manifest from '../../manifest.json';
import GET_HEROES from './constants';

export function listHeroes(heroes) {
  return {
    type: GET_HEROES,
    heroes,
  };
}

export function getListHeroes() {
  const ts = Date.now() / 1000;
  const apikey = manifest.public_api_key;
  const privateApiKey = manifest.private_api_key;
  const hash = crypto.createHash('md5').update(`${ts}${privateApiKey}${apikey}`).digest('hex');
  return dispatch => request
    .get('/v1/public/characters')
    .query({ ts, apikey, hash })
    .end((err, res) => {
      if (!err) {
        console.log(res.body.data.results);
        dispatch(listHeroes(res.body.data.results));
      } else {
        console.log(err);
      }
    });
}
