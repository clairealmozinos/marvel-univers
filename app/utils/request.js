//
// Module to centralize the use of an ajax API (here superagent)
//

import superagent from 'superagent';
import crypto from 'crypto';
import manifest from '../manifest.json';

const baseUrl = 'http://gateway.marvel.com:80';

function get(url) {
  const ts = Date.now() / 1000;
  const apikey = manifest.public_api_key;
  const privateApiKey = manifest.private_api_key;
  const hash = crypto.createHash('md5').update(`${ts}${privateApiKey}${apikey}`).digest('hex');

  return superagent.get(baseUrl + url).query({ ts, apikey, hash });
}

export default {
  get,
};
