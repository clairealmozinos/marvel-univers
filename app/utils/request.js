//
// Module to centralize the use of an ajax API (here superagent)
//

import superagent from 'superagent';

const baseUrl = 'http://gateway.marvel.com:80';

function get(url) {
  return superagent.get(baseUrl + url);
}

function post(url) {
  return superagent.post(baseUrl + url);
}

export default {
  get,
  post,
};
