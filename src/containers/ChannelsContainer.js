import React from 'react';
import {queryStream, queryUser} from '../api/twitchApi';

export default class ChannelsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      trackedChannels: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"],
      notFoundChannels: [],
      idleChannels: [],
      streamingChannels: []
    };
  }

  // TODO: move it to constructor()
  componentWillMount() {
    const userMap = {};
    const notFoundChannels = [];
    const idleChannels = [];
    const streamingChannels = [];
    this.state.trackedChannels.forEach((ch) => {
      userMap[ch] = [queryUser(ch), queryStream(ch)];
    });

    for (let user in userMap) {
      userMap[user][0]
        .then((userData) => {
          if (userData.error) {
            notFoundChannels.push(user);
            console.log("Not found: " + user);
            return Promise.reject();
          }
          else {
            return userMap[user][1];
          }
        })
        .then(
          (streamData) => {
            if (streamData.stream === null) {
              idleChannels.push(user);
              console.log("Idle: " + user);
            }
            else {
              streamingChannels.push(user);
              console.log("Streaming: " + user);
            }
          },
          () => {
            /* do nothing, just silence onReject */
          });
    }

    this.setState({
      notFoundChannels: notFoundChannels,
      idleChannels: idleChannels,
      streamingChannels: streamingChannels
    });
  }

  render() {
    return (
      <div className="channels-container">

      </div>
    );
  }
}

ChannelsContainer.propTypes = {};
