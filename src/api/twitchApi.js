import jsonp from 'jsonp-promise';

export function queryStream(channel) {
  const jsonpRequest = jsonp(`https://wind-bow.glitch.me/twitch-api/streams/${channel}`);

  return jsonpRequest.promise;
}

export function queryUser(user) {
  const jsonpRequest = jsonp(`https://wind-bow.glitch.me/twitch-api/users/${user}`);

  return jsonpRequest.promise;
}
