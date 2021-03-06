import jsonp from 'jsonp-promise';

export function queryAll(user) {
  const userJsonp = jsonp(`https://wind-bow.glitch.me/twitch-api/users/${user}`);
  const channelJsonp = jsonp(`https://wind-bow.glitch.me/twitch-api/channels/${user}`);
  const streamJsonp = jsonp(`https://wind-bow.glitch.me/twitch-api/streams/${user}`);

  return Promise.all(
    [userJsonp.promise, channelJsonp.promise, streamJsonp.promise]
      .map(p => p.catch(() => ({error: "Error fetching data"})))
  )
    .then(results => {
      let response = {};

      response._queried = user;
      response.user = results[0];
      response.channel = results[1];
      response.stream = results[2];

      return response;
    });
}
